/** A receipt means the company ERP committed the enquiry, not just that fetch started. */
export async function submitErpLead(request: Request, type: string): Promise<Response> {
  const secret = process.env.CRM_WEBHOOK_SECRET || "";
  if (!secret) return Response.json({ success: false, detail: "Enquiry connection unavailable. Please try again shortly." }, { status: 503 });
  if (Number(request.headers.get("content-length") || 0) > 32768) {
    return Response.json({ success: false, detail: "Enquiry is too large." }, { status: 413 });
  }
  let body: Record<string, unknown>;
  try {
    const text = await request.text();
    if (text.length > 32768) return Response.json({ success: false, detail: "Enquiry is too large." }, { status: 413 });
    body = JSON.parse(text);
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("Invalid body");
  } catch {
    return Response.json({ success: false, detail: "Please check the enquiry details." }, { status: 400 });
  }

  // Anti-bot honeypot check
  if (body.website_hp || body.honeypot) {
    return Response.json({ success: true, id: "filtered", message: "Enquiry saved." });
  }

  const field = (...keys: string[]) => {
    for (const key of keys) {
      const val = body[key];
      if (typeof val === "string" && val.trim()) return val.trim();
    }
    return "";
  };

  const rawPhone = field("phone", "mobile", "whatsapp");
  const email = field("email");
  if (!/^(?:\+?91[\s-]*)?[6-9][\d\s-]{9,14}$/.test(rawPhone) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ success: false, detail: "Please provide a valid mobile number or email." }, { status: 400 });
  }

  // Normalize Indian mobile to clean 10 digits
  let normalizedPhone = rawPhone;
  if (rawPhone) {
    const digitsOnly = rawPhone.replace(/\D/g, "");
    if (digitsOnly.length === 12 && digitsOnly.startsWith("91")) {
      normalizedPhone = digitsOnly.slice(2);
    } else if (digitsOnly.length >= 10) {
      normalizedPhone = digitsOnly.slice(-10);
    }
  }

  // Idempotency: reuse client-provided submission token or generate fresh UUID
  const clientSubId = field("submission_id", "client_submission_id", "external_id");
  const externalId = (clientSubId && /^[a-zA-Z0-9_-]{16,64}$/.test(clientSubId))
    ? clientSubId
    : crypto.randomUUID();

  const payload = {
    ...body,
    external_id: externalId,
    form_type: type,
    source: "KrishiGears website - " + type,
    name: field("name", "full_name", "owner_name", "business_name") || "Website enquiry",
    phone: normalizedPhone,
    email,
    inquiry: field("product", "product_model", "machine_model", "requirement") || (type === "dealer" ? "Dealership enquiry" : "Machinery enquiry"),
    location: field("location") || [field("city", "district"), field("state")].filter(Boolean).join(", "),
    notes: field("message", "notes"),
  };

  const endpoint = process.env.CRM_WEBHOOK_URL || "https://erp.krishigears.in/api/webhooks/lead";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Webhook-Secret": secret },
      body: JSON.stringify(payload),
      signal: controller.signal,
      cache: "no-store",
    });
    const result = await response.json();
    if (!response.ok || result.status !== "success" || !result.lead) throw new Error("ERP did not commit intake");
    return Response.json({
      success: true,
      id: result.lead.public_id || result.lead.displayId || externalId,
      message: type === "warranty" ? "Warranty request saved for review." : "Enquiry saved. Our team will follow up."
    });
  } catch {
    return Response.json({
      success: false,
      detail: "Your enquiry could not be saved. Please retry; your details are still in the form."
    }, { status: 503 });
  } finally {
    clearTimeout(timeout);
  }
}
