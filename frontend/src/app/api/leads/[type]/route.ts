import { NextResponse } from "next/server";

const CRM_WEBHOOK_URL =
  process.env.CRM_WEBHOOK_URL ||
  "https://krishigears-crm.onrender.com/api/webhooks/website/lead";
const CRM_WEBHOOK_SECRET =
  process.env.CRM_WEBHOOK_SECRET || process.env.CRON_SECRET || "";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ type: string }> }
) {
  try {
    const { type } = await params;
    const body = await request.json().catch(() => ({}));
    const leadId = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    const payload = {
      id: leadId,
      type: type || "general",
      created_at: createdAt,
      name: body.name || body.full_name || body.owner_name || body.business_name || "Website Lead",
      phone: body.phone || body.mobile || body.whatsapp || "",
      product: body.product || body.product_model || body.machine_model || type || "Website Enquiry",
      location: body.location || body.city || body.district || body.state || "",
      ...body,
    };

    // Forward to WhatsApp CRM with 5s timeout
    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (CRM_WEBHOOK_SECRET) {
        headers["X-Webhook-Secret"] = CRM_WEBHOOK_SECRET;
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      fetch(CRM_WEBHOOK_URL, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
        signal: controller.signal,
      })
        .catch((err) => {
          console.warn(`[CRM Forward Error] ${err?.message || err}`);
        })
        .finally(() => clearTimeout(timeoutId));
    } catch (crmErr) {
      console.warn("[CRM Forward]", crmErr);
    }

    return NextResponse.json({
      success: true,
      id: leadId,
      message: "Lead received successfully",
    });
  } catch (error: any) {
    console.error("[Leads API Error]", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to process lead" },
      { status: 500 }
    );
  }
}
