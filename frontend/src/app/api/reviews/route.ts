import { NextResponse } from "next/server";
import { TESTIMONIALS } from "@/data/catalog";

export async function GET() {
  return NextResponse.json(TESTIMONIALS || []);
}
