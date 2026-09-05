import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Sheet, Check, Copy, ExternalLink, Save, FlaskConical, Loader2,
  AlertCircle, CheckCircle2, ChevronRight
} from "lucide-react";
import { apiClient, formatApiError } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const ENQUIRY_HEADERS = "Received At\tLead ID\tName\tPhone\tEmail\tLocation\tProduct\tMessage";
const DEALER_HEADERS = "Received At\tLead ID\tFull Name\tPhone\tEmail\tBusiness Name\tCity\tState\tPincode\tYears in Business\tCurrent Products\tMessage";
const WARRANTY_HEADERS = "Received At\tReg ID\tOwner Name\tPhone\tEmail\tProduct Model\tSerial Number\tPurchase Date\tDealer Name\tCity\tState\tMessage";

const ENQUIRY_SCRIPT = `function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([
      new Date(data.created_at || new Date()),
      data.id || "",
      data.name || data.full_name || "",
      data.phone || "",
      data.email || "",
      data.location || (data.city ? (data.city + (data.state ? ", " + data.state : "")) : ""),
      data.product || data.business_name || "",
      data.message || ""
    ]);
    return ContentService.createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false, error:String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;

const DEALER_SCRIPT = `function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([
      new Date(data.created_at || new Date()),
      data.id || "",
      data.full_name || data.name || "",
      data.phone || "",
      data.email || "",
      data.business_name || "",
      data.city || "",
      data.state || "",
      data.pincode || "",
      data.years_in_business || "",
      data.current_products || "",
      data.message || ""
    ]);
    return ContentService.createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false, error:String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;

const WARRANTY_SCRIPT = `function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([
      new Date(data.created_at || new Date()),
      data.id || "",
      data.owner_name || "",
      data.phone || "",
      data.email || "",
      data.product_model || "",
      data.serial_number || "",
      data.purchase_date || "",
      data.dealer_name || "",
      data.city || "",
      data.state || "",
      data.message || ""
    ]);
    return ContentService.createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false, error:String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;

export default function SheetsIntegration() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState(null);
  const [enquiryUrl, setEnquiryUrl] = useState("");
  const [dealerUrl, setDealerUrl] = useState("");
  const [warrantyUrl, setWarrantyUrl] = useState("");

  useEffect(() => {
    apiClient.get("/admin/integrations/sheets")
      .then((res) => {
        setEnquiryUrl(res.data.enquiry_url || "");
        setDealerUrl(res.data.dealer_url || "");
        setWarrantyUrl(res.data.warranty_url || "");
      })
      .catch((err) => toast.error(formatApiError(err)))
      .finally(() => setLoading(false));
    // apiClient and formatApiError are module-level stable imports — mount-only fetch.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const save = async () => {
    setSaving(true);
    try {
      await apiClient.put("/admin/integrations/sheets", {
        enquiry_url: enquiryUrl.trim(),
        dealer_url: dealerUrl.trim(),
        warranty_url: warrantyUrl.trim(),
      });
      toast.success("Sheet URLs saved. New submissions will be forwarded.");
    } catch (err) { toast.error(formatApiError(err)); }
    finally { setSaving(false); }
  };

  const test = async (kind) => {
    setTesting(kind);
    try {
      const { data } = await apiClient.post(`/admin/integrations/sheets/test/${kind}`);
      if (data.success) toast.success(`Test row sent to your ${kind} sheet — check it now!`);
      else toast.error(`Webhook returned ${data.status_code}. Check Apps Script deployment.`);
    } catch (err) { toast.error(formatApiError(err)); }
    finally { setTesting(null); }
  };

  const copy = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  if (loading) return <div className="text-center text-zinc-400 py-12">Loading settings…</div>;

  const enquiryConfigured = !!enquiryUrl;
  const dealerConfigured = !!dealerUrl;
  const warrantyConfigured = !!warrantyUrl;

  return (
    <div data-testid="sheets-integration-panel" className="space-y-8">
      {/* Hero / status */}
      <div className="border border-zinc-800 bg-surface-dark p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 grid place-items-center bg-lime-500/10 border border-lime-500/40 text-lime-500 rounded-sm shrink-0">
            <Sheet className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-2xl">Google Sheets Integration</h3>
            <p className="text-zinc-300 mt-2 max-w-2xl text-sm leading-relaxed">
              Auto-forward every <strong className="text-white">Product Enquiry</strong> and <strong className="text-white">Dealer Application</strong> into your own Google Sheets. Two separate sheets, both updated in real time, on top of the MongoDB admin panel.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <StatusPill ok={enquiryConfigured} label="Enquiry Sheet" />
              <StatusPill ok={dealerConfigured} label="Dealer Sheet" />
              <StatusPill ok={warrantyConfigured} label="Warranty Sheet" />
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-step guide */}
      <div className="border border-zinc-800 bg-surface-dark">
        <div className="p-6 border-b border-zinc-800">
          <div className="text-xs tracking-[0.25em] uppercase text-lime-500 font-bold">Setup Guide</div>
          <h3 className="font-display font-bold text-xl mt-2">10-minute walkthrough — follow once, never touch again.</h3>
          <p className="text-zinc-400 text-sm mt-2">Do these steps once for the Enquiry sheet, then repeat for the Dealer sheet.</p>
        </div>

        <Accordion type="multiple" defaultValue={["sheet-1"]} className="divide-y divide-zinc-800">
          <SetupStep
            value="sheet-1"
            num="1"
            title="Create the Enquiry Sheet"
            done={enquiryConfigured}
          >
            <Step>
              <p>Open a fresh Google Sheet:</p>
              <a
                href="https://sheets.new"
                target="_blank"
                rel="noreferrer"
                data-testid="open-new-sheet-enquiry"
                className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-4 py-2 rounded-md mt-2"
              >
                Open sheets.new <ExternalLink className="h-3.5 w-3.5"/>
              </a>
            </Step>
            <Step>
              <p>Rename the sheet to: <code className="text-lime-400 bg-black border border-zinc-800 px-2 py-0.5 text-xs">KrishiGears – Enquiries</code></p>
            </Step>
            <Step>
              <p>Click cell <strong>A1</strong> and paste these column headers (Google Sheets will split them across cells automatically):</p>
              <CodeBlock label="Headers" code={ENQUIRY_HEADERS} onCopy={() => copy(ENQUIRY_HEADERS, "Headers")}/>
            </Step>
            <Step>
              <p>In the top menu, click <strong>Extensions → Apps Script</strong>. A code editor opens in a new tab.</p>
            </Step>
            <Step>
              <p><strong>Delete</strong> any default code in the editor and paste this:</p>
              <CodeBlock label="Apps Script (Enquiry)" code={ENQUIRY_SCRIPT} onCopy={() => copy(ENQUIRY_SCRIPT, "Apps Script code")}/>
              <p className="text-xs text-zinc-400 mt-2">Press <kbd className="bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-200">Ctrl/Cmd + S</kbd> to save. Name it "KrishiGears Webhook".</p>
            </Step>
            <Step>
              <p>Top-right of the Apps Script editor click <strong>Deploy → New deployment</strong>. Then:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-200">
                <li>Click the ⚙️ gear icon → choose <strong>Web app</strong></li>
                <li>Execute as: <strong>Me (your Gmail)</strong></li>
                <li>Who has access: <strong className="text-lime-400">Anyone</strong> ← important</li>
                <li>Click <strong>Deploy</strong></li>
                <li>If asked, <strong>Authorize access</strong> → pick your account → click <em>Advanced</em> → <em>Go to KrishiGears Webhook (unsafe)</em> → <em>Allow</em></li>
              </ul>
              <p className="mt-3 text-zinc-200">A popup shows a <strong>Web app URL</strong> ending in <code className="text-lime-400">/exec</code>. <strong>Copy it.</strong></p>
            </Step>
            <Step>
              <p>Paste the URL below and click <strong>Save & Test</strong>:</p>
              <div className="mt-3">
                <Label className="text-xs uppercase tracking-wider text-zinc-300">Enquiry Sheet Web App URL</Label>
                <Input
                  data-testid="enquiry-url-input"
                  value={enquiryUrl}
                  onChange={(e) => setEnquiryUrl(e.target.value)}
                  placeholder="https://script.google.com/macros/s/AKfycb…/exec"
                  className="bg-black border-zinc-800 mt-1.5 font-mono text-xs"
                />
              </div>
            </Step>
          </SetupStep>

          <SetupStep
            value="sheet-2"
            num="2"
            title="Create the Dealer Application Sheet"
            done={dealerConfigured}
          >
            <Step>
              <p>Open a second blank Google Sheet:</p>
              <a
                href="https://sheets.new"
                target="_blank"
                rel="noreferrer"
                data-testid="open-new-sheet-dealer"
                className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-4 py-2 rounded-md mt-2"
              >
                Open sheets.new <ExternalLink className="h-3.5 w-3.5"/>
              </a>
            </Step>
            <Step>
              <p>Rename: <code className="text-lime-400 bg-black border border-zinc-800 px-2 py-0.5 text-xs">KrishiGears – Dealer Applications</code></p>
            </Step>
            <Step>
              <p>Click cell <strong>A1</strong> and paste these headers:</p>
              <CodeBlock label="Headers" code={DEALER_HEADERS} onCopy={() => copy(DEALER_HEADERS, "Headers")}/>
            </Step>
            <Step>
              <p><strong>Extensions → Apps Script</strong>, delete default code and paste this <em>dealer-specific</em> code:</p>
              <CodeBlock label="Apps Script (Dealer)" code={DEALER_SCRIPT} onCopy={() => copy(DEALER_SCRIPT, "Apps Script code")}/>
              <p className="text-xs text-zinc-400 mt-2">Save with <kbd className="bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-200">Ctrl/Cmd + S</kbd>.</p>
            </Step>
            <Step>
              <p><strong>Deploy → New deployment</strong> → Web app → <strong className="text-lime-400">Anyone</strong> access → Deploy → Authorize. Copy the new <code className="text-lime-400">/exec</code> URL.</p>
            </Step>
            <Step>
              <p>Paste that URL here:</p>
              <div className="mt-3">
                <Label className="text-xs uppercase tracking-wider text-zinc-300">Dealer Sheet Web App URL</Label>
                <Input
                  data-testid="dealer-url-input"
                  value={dealerUrl}
                  onChange={(e) => setDealerUrl(e.target.value)}
                  placeholder="https://script.google.com/macros/s/AKfycb…/exec"
                  className="bg-black border-zinc-800 mt-1.5 font-mono text-xs"
                />
              </div>
            </Step>
          </SetupStep>

          <SetupStep
            value="sheet-3"
            num="3"
            title="Create the Warranty Registration Sheet"
            done={warrantyConfigured}
          >
            <Step>
              <p>Open a third blank Google Sheet:</p>
              <a href="https://sheets.new" target="_blank" rel="noreferrer" data-testid="open-new-sheet-warranty" className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-4 py-2 rounded-md mt-2">
                Open sheets.new <ExternalLink className="h-3.5 w-3.5"/>
              </a>
            </Step>
            <Step>
              <p>Rename: <code className="text-lime-400 bg-black border border-zinc-800 px-2 py-0.5 text-xs">KrishiGears – Warranty Registrations</code></p>
            </Step>
            <Step>
              <p>Paste these headers into row 1:</p>
              <CodeBlock label="Headers" code={WARRANTY_HEADERS} onCopy={() => copy(WARRANTY_HEADERS, "Headers")}/>
            </Step>
            <Step>
              <p>Extensions → Apps Script → paste this <em>warranty-specific</em> code:</p>
              <CodeBlock label="Apps Script (Warranty)" code={WARRANTY_SCRIPT} onCopy={() => copy(WARRANTY_SCRIPT, "Apps Script code")}/>
            </Step>
            <Step>
              <p>Deploy → New deployment → Web app → <strong className="text-lime-400">Anyone</strong> access → Authorize → Copy URL.</p>
            </Step>
            <Step>
              <p>Paste it here:</p>
              <div className="mt-3">
                <Label className="text-xs uppercase tracking-wider text-zinc-300">Warranty Sheet Web App URL</Label>
                <Input data-testid="warranty-url-input" value={warrantyUrl} onChange={(e) => setWarrantyUrl(e.target.value)} placeholder="https://script.google.com/macros/s/AKfycb…/exec" className="bg-black border-zinc-800 mt-1.5 font-mono text-xs"/>
              </div>
            </Step>
          </SetupStep>
        </Accordion>
      </div>

      {/* Save & Test */}
      <div className="border border-lime-500/30 bg-lime-500/5 p-6 md:p-8">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <div>
            <h3 className="font-display font-bold text-xl">Save & Verify</h3>
            <p className="text-zinc-300 text-sm mt-1">After saving, click the test buttons — a sample row will appear in your sheets.</p>
          </div>
          <button
            onClick={save}
            disabled={saving}
            data-testid="save-sheets-btn"
            className="bg-lime-500 hover:bg-lime-400 text-black dark:text-black font-bold px-6 py-3 rounded-md inline-flex items-center gap-2 disabled:opacity-50"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin"/> : <Save className="h-4 w-4"/>}
            {saving ? "Saving..." : "Save URLs"}
          </button>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <button
            onClick={() => test("enquiry")}
            disabled={!enquiryConfigured || testing === "enquiry"}
            data-testid="test-enquiry-btn"
            className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-4 py-3 rounded-md font-bold inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:border-zinc-700 disabled:hover:text-current"
          >
            {testing === "enquiry" ? <Loader2 className="h-4 w-4 animate-spin"/> : <FlaskConical className="h-4 w-4"/>}
            Test Enquiry
          </button>
          <button
            onClick={() => test("dealer")}
            disabled={!dealerConfigured || testing === "dealer"}
            data-testid="test-dealer-btn"
            className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-4 py-3 rounded-md font-bold inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:border-zinc-700 disabled:hover:text-current"
          >
            {testing === "dealer" ? <Loader2 className="h-4 w-4 animate-spin"/> : <FlaskConical className="h-4 w-4"/>}
            Test Dealer
          </button>
          <button
            onClick={() => test("warranty")}
            disabled={!warrantyConfigured || testing === "warranty"}
            data-testid="test-warranty-btn"
            className="border border-zinc-700 hover:border-lime-500 hover:text-lime-500 px-4 py-3 rounded-md font-bold inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:border-zinc-700 disabled:hover:text-current"
          >
            {testing === "warranty" ? <Loader2 className="h-4 w-4 animate-spin"/> : <FlaskConical className="h-4 w-4"/>}
            Test Warranty
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="border border-zinc-800 bg-surface-dark">
        <div className="p-6 border-b border-zinc-800">
          <h3 className="font-display font-bold text-xl">Common questions</h3>
        </div>
        <Accordion type="single" collapsible>
          {[
            { q: "Is 'Anyone' access dangerous?", a: "No — the URL is unguessable and the script only appends rows. Worst case, someone with the URL could add fake rows. Leads are also stored in MongoDB so you always have a clean backup." },
            { q: "Will the website form be slower?", a: "No. The webhook fires in the background (fire-and-forget). The user's form submits in ~200ms regardless of whether Sheets is online." },
            { q: "What if Google Sheets is down?", a: "Forms still submit successfully. Leads are stored in MongoDB and visible in the Leads tab. When Sheets is back, new leads will flow as usual (older ones won't replay automatically — but you can always export from the admin if needed)." },
            { q: "Can I change the URL later?", a: "Yes. Just paste a new Web app URL above and click Save URLs. Setting an empty URL disables the integration for that lead type." },
            { q: "Why two separate sheets?", a: "Enquiries and dealer applications have different fields. Keeping them separate makes filtering, sharing and team workflows much cleaner." },
          ].map((f) => (
            <AccordionItem key={f.q} value={`faq-${f.q.slice(0, 20)}`} className="border-zinc-800">
              <AccordionTrigger className="px-6 text-left hover:text-lime-500 hover:no-underline text-sm">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="px-6 text-zinc-300 text-sm leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

function StatusPill({ ok, label }) {
  return (
    <div data-testid={`status-${label.toLowerCase().replace(/\s/g, "-")}`} className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold tracking-wider uppercase ${ok ? "bg-lime-500/10 text-lime-400 border border-lime-500/30" : "bg-zinc-50 dark:bg-zinc-900 text-black dark:text-black border border-zinc-800"}`}>
      {ok ? <CheckCircle2 className="h-3.5 w-3.5"/> : <AlertCircle className="h-3.5 w-3.5"/>}
      {label} {ok ? "Connected" : "Not connected"}
    </div>
  );
}

function SetupStep({ value, num, title, done, children }) {
  return (
    <AccordionItem value={value} className="border-0">
      <AccordionTrigger className="px-6 py-5 hover:no-underline">
        <div className="flex items-center gap-4 text-left">
          <div className={`h-9 w-9 grid place-items-center font-display font-black rounded-sm ${done ? "bg-lime-500 text-black dark:text-black" : "bg-zinc-800 text-black dark:text-black"}`}>
            {done ? <Check className="h-4 w-4"/> : num}
          </div>
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-zinc-400 font-bold">Step {num}</div>
            <div className="font-display font-bold text-lg">{title}</div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-6">
        <div className="pl-13 space-y-5 text-zinc-200 text-sm leading-relaxed">{children}</div>
      </AccordionContent>
    </AccordionItem>
  );
}

function Step({ children }) {
  return (
    <div className="flex gap-3">
      <ChevronRight className="h-4 w-4 text-lime-500 mt-0.5 shrink-0"/>
      <div className="flex-1">{children}</div>
    </div>
  );
}

function CodeBlock({ label, code, onCopy }) {
  return (
    <div className="mt-3 border border-zinc-800 bg-black overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800 bg-surface">
        <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-400 font-bold">{label}</span>
        <button
          onClick={onCopy}
          className="text-xs text-lime-500 hover:text-lime-400 inline-flex items-center gap-1.5 font-bold"
        >
          <Copy className="h-3 w-3"/> Copy
        </button>
      </div>
      <pre className="px-4 py-3 text-xs text-zinc-200 overflow-x-auto whitespace-pre-wrap break-all font-mono">{code}</pre>
    </div>
  );
}
