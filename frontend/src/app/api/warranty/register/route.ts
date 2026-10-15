import { NextResponse } from "next/server";

const CRM_WEBHOOK_URL =
  process.env.CRM_WEBHOOK_URL ||
  "https://krishigears-crm.onrender.com/api/webhooks/website/lead";
const CRM_WEBHOOK_SECRET =
  process.env.CRM_WEBHOOK_SECRET || process.env.CRON_SECRET || "";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const leadId = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    const payload = {
      id: leadId,
      type: "warranty",
      created_at: createdAt,
      name: body.owner_name || body.name || body.full_name || "Warranty Registrant",
      phone: body.phone || body.mobile || "",
      product: body.machine_model || body.product || "Power Weeder",
      location: body.city || body.district || body.state || "",
      serial_number: body.serial_number || "",
      purchase_date: body.purchase_date || "",
      ...body,
    };

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
      message: "Warranty registered successfully",
    });
  } catch (error: any) {
    console.error("[Warranty API Error]", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to register warranty" },
      { status: 500 }
    );
  }
}
