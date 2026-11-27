import Link from "next/link";
import { COMPANY } from "@/data/catalog";

export const metadata = {
  title: "Power Weeder Service & Repair Support",
  description: "Contact KrishiGears for troubleshooting, spare parts enquiries and supplier or partner repair routing. Coverage and timing require confirmation.",
  alternates: { canonical: "https://krishigears.com/service" },
};

export default function ServiceSupport() {
  return <main className="kg-section max-w-[1200px] mx-auto space-y-6">
    <nav aria-label="Breadcrumb"><Link href="/">Home</Link> / Service support</nav>
    <h1 className="kg-h1">Power weeder service support</h1>
    <p>Share your model plate, fault details, invoice if available and PIN code with our support desk. We check supplier or partner repair routing options. Local coverage, technician availability, charges and timing require confirmation before any work is arranged.</p>
    <p>KrishiGears holds no stock; machinery and parts are procured per sale. Our Jaipur registered office is not a walk-in workshop or stocked warehouse. Confirm a repair destination before moving your machine.</p>
    <div className="flex flex-wrap gap-6"><Link className="underline" href="/contact">Contact support</Link><a className="underline" href={`mailto:${COMPANY.support}`}>{COMPANY.support}</a><Link className="underline" href="/warranty-and-support">Warranty information</Link><Link className="underline" href="/products/category/power-weeder-spare-parts">Spare parts catalogue</Link></div>
  </main>;
}
