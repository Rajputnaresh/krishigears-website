import { submitErpLead } from "@/lib/erp-intake";

export async function POST(request: Request, { params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  return submitErpLead(request, type);
}
