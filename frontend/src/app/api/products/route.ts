import { NextResponse } from "next/server";
import { PRODUCTS } from "@/data/catalog";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const featured = searchParams.get("featured");

  if (featured === "true") {
    // Return first 6 products as featured
    return NextResponse.json(PRODUCTS.slice(0, 6));
  }

  return NextResponse.json(PRODUCTS);
}
