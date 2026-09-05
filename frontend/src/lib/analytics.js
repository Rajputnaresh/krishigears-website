// Tiny wrapper around GA4 gtag for conversion events.
// Safe no-op if gtag isn't loaded (e.g. ad-blockers, SSR builds, etc.)

export function track(eventName, params = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  try {
    window.gtag("event", eventName, params);
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[analytics] gtag failed:", err);
    }
  }
}

// Convenience helpers — every conversion-relevant click/submit has its own name
// so you can build clean funnels in GA4 Reports → Events.
export const trackWhatsAppClick = (source, productSlug) =>
  track("whatsapp_click", { source, product_slug: productSlug || null });

export const trackPhoneClick = (source) =>
  track("phone_click", { source });

export const trackEnquirySubmit = (productSlug, leadType = "enquiry") =>
  track("enquiry_submit", { product_slug: productSlug || null, lead_type: leadType });

export const trackDealerSubmit = () => track("dealer_submit");

export const trackBulkOrderSubmit = () => track("bulk_order_submit");

export const trackWarrantySubmit = () => track("warranty_submit");
