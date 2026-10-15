import { NextResponse } from "next/server";
import { PRODUCTS } from "@/data/catalog";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const featured = searchParams.get("featured");
  const category = searchParams.get("category");
  const limit = searchParams.get("limit");

  let list = PRODUCTS;

  if (category) {
    list = list.filter(
      (p) => p.category?.toLowerCase() === category.toLowerCase()
    );
  }

  if (featured === "true") {
    return NextResponse.json(list.slice(0, 6));
  }

  if (limit) {
    const l = parseInt(limit, 10);
    if (!isNaN(l) && l > 0) {
      return NextResponse.json(list.slice(0, l));
    }
  }

  return NextResponse.json(list);
}
