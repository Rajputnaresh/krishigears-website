import { NextResponse } from "next/server";

const CRM_WEBHOOK_URL =
  process.env.CRM_WEBHOOK_URL ||
  "https://krishigears-whatsapp-crm-mvp.onrender.com/api/webhooks/website/lead";
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
