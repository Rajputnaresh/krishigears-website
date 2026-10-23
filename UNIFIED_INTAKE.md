# Company ERP intake

Lead/dealer enquiries, WhatsApp preflight contacts and warranty requests now wait for a committed
ERP response before showing success. Customer details remain in the form if saving fails. The
WhatsApp app handoff requires a phone and saves the enquiry first; a click alone is not a chat sync.

Set server-only CRM_WEBHOOK_URL=https://erp.krishigears.in/api/webhooks/lead and CRM_WEBHOOK_SECRET
in Amplify; the build writes only these two names into .env.production for the SSR runtime. Never
use NEXT_PUBLIC_ or expose credentials in the browser. The ERP validates the shared secret and
persists a contact plus enquiry timeline. No retired CRM fallback, fire-and-forget receipt, automatic
warranty entitlement or dealer approval.

Checks: from frontend, node tests/erp-intake.cjs; npx tsc --noEmit; npm run build.
