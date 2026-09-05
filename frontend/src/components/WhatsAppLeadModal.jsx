"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { COMPANY } from "@/data/catalog";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackWhatsAppClick, trackEnquirySubmit } from "@/lib/analytics";
import { apiClient } from "@/lib/api";

export default function WhatsAppLeadModal({
  trigger,
  defaultProduct = "Agricultural Machinery",
  source = "whatsapp_modal"
}) {
  const [open, setOpen] = useState(false);
  const [district, setDistrict] = useState("");
  const [requirement, setRequirement] = useState(defaultProduct);
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleLaunchWhatsApp = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const fullMessage = `नमस्ते KrishiGears, मुझे ${district ? `${district} (ज़िला) के लिए ` : ""}${requirement} की फ़ैक्ट्री थोक दर / डीलरशिप कोटेशन चाहिए। [Phone: ${phone || "WhatsApp Direct"}]`;
    const waUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(fullMessage)}&utm_source=website&utm_medium=whatsapp_modal&utm_campaign=kg_catalog`;

    // 1. Asynchronously log intent to backend CRM lead collector (fails gracefully)
    try {
      apiClient.post("/leads/enquiry", {
        name: `WhatsApp Lead (${district || "Direct"})`,
        phone: phone || "Via WhatsApp",
        location: district,
        product: requirement,
        message: `Triggered WhatsApp Pre-flight Modal from ${source}`,
      }).catch(() => {});
    } catch (_) {}

    // 2. Track analytics conversion event
    trackWhatsAppClick(source, requirement);
    trackEnquirySubmit(requirement, "whatsapp_preflight");

    setSubmitting(false);
    setOpen(false);

    // 3. Open WhatsApp in new tab / mobile app
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="bg-zinc-950 border-zinc-800 text-white max-w-md p-6">
        <DialogHeader className="space-y-2">
          <div className="flex items-center gap-2 text-whatsapp font-bold text-xs uppercase tracking-wider">
            <WhatsAppIcon className="h-4 w-4" /> 1-Tap Factory Pricing Desk
          </div>
          <DialogTitle className="font-display text-xl text-white">
            Get Wholesale Rate on WhatsApp
          </DialogTitle>
          <DialogDescription className="text-zinc-300 text-xs">
            अपना ज़िला और मशीन का नाम दर्ज करें — तुरंत फ़ैक्ट्री रेट और डीलर कोटेशन प्राप्त करें।
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleLaunchWhatsApp} className="space-y-4 mt-3">
          <div className="space-y-1.5">
            <Label className="text-xs text-zinc-300 font-semibold">
              आपका ज़िला / Your District / City*
            </Label>
            <Input
              required
              placeholder="e.g. Alwar, Kolhapur, Indore, Patna"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="bg-black border-zinc-700 text-white placeholder:text-zinc-500 text-sm focus:border-lime-500"
            />
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs text-zinc-300 font-semibold">
              मशीन या स्पेयर पार्ट्स / Equipment Requirement*
            </Label>
            <Input
              required
              placeholder="e.g. 7HP Power Weeder, 10HP Diesel, Blades, Carburetor"
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              className="bg-black border-zinc-700 text-white placeholder:text-zinc-500 text-sm focus:border-lime-500"
            />
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs text-zinc-300 font-semibold">
              मोबाइल नंबर / WhatsApp Phone (Optional)
            </Label>
            <Input
              type="tel"
              placeholder="10-digit mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-black border-zinc-700 text-white placeholder:text-zinc-500 text-sm focus:border-lime-500"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-2 py-3.5 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold rounded-md flex items-center justify-center gap-2 text-sm shadow-xl active:scale-95 transition"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>व्हाट्सएप पर रेट देखें / Continue to WhatsApp</span>
          </button>

          <p className="text-[10px] text-zinc-400 text-center">
            🔒 KrishiGears Verified Factory Desk · No spam · Instant reply within 15 mins
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
