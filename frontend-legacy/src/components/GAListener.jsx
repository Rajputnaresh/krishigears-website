import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// GA4 SPA page_view tracker.
// The base tag in index.html is configured with `send_page_view: false`,
// so we emit a page_view here on every route change (including the first load).
export default function GAListener() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    const path = location.pathname + location.search;
    window.gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  return null;
}
