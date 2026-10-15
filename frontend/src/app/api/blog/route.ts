import { NextResponse } from "next/server";
import { BLOG_POSTS_ARRAY } from "@/data/blogPosts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get("tag");
  const limit = searchParams.get("limit");

  let list = BLOG_POSTS_ARRAY;

  if (tag && tag !== "All") {
    list = list.filter((p) => p.tags && p.tags.includes(tag));
  }

  // Strip full markdown body from list payload for high-performance response
  const summaryList = list.map(({ content, ...rest }) => rest);

  if (limit) {
    const l = parseInt(limit, 10);
    if (!isNaN(l) && l > 0) {
      return NextResponse.json(summaryList.slice(0, l));
    }
  }

  return NextResponse.json(summaryList);
}
