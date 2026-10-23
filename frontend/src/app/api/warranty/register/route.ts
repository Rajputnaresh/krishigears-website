import { submitErpLead } from "@/lib/erp-intake";

export async function POST(request: Request) {
  return submitErpLead(request, "warranty");
}
