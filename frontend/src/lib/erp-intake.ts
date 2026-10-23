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
  const field = (...keys: string[]) => {
    for (const key of keys) if (typeof body[key] === "string" && body[key].trim()) return body[key].trim();
    return "";
  };
  const phone = field("phone", "mobile", "whatsapp");
  const email = field("email");
  if (!/^(?:\+?91[\s-]*)?[6-9][\d\s-]{9,14}$/.test(phone) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ success: false, detail: "Please provide a valid mobile number or email." }, { status: 400 });
  }
  const externalId = crypto.randomUUID();
  const payload = {
    ...body,
    external_id: externalId,
    form_type: type,
    source: "KrishiGears website - " + type,
    name: field("name", "full_name", "owner_name", "business_name") || "Website enquiry",
    phone,
    email,
    inquiry: field("product", "product_model", "machine_model", "requirement") || (type === "dealer" ? "Dealership enquiry" : "Machinery enquiry"),
    location: field("location") || [field("city", "district"), field("state")].filter(Boolean).join(", "),
    notes: field("message", "notes"),
  };
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(process.env.CRM_WEBHOOK_URL || "https://erp.krishigears.in/api/webhooks/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Webhook-Secret": secret },
      body: JSON.stringify(payload), signal: controller.signal, cache: "no-store",
    });
    const result = await response.json();
    if (!response.ok || result.status !== "success" || !result.lead) throw new Error("ERP did not commit intake");
    return Response.json({ success: true, id: result.lead.public_id || result.lead.displayId || externalId,
      message: type === "warranty" ? "Warranty request saved for review." : "Enquiry saved. Our team will follow up." });
  } catch {
    return Response.json({ success: false, detail: "Your enquiry could not be saved. Please retry; your details are still in the form." }, { status: 503 });
  } finally {
    clearTimeout(timeout);
  }
}
