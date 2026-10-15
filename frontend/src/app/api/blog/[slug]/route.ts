import { NextResponse } from "next/server";
import { BLOG_POSTS } from "@/data/blogPosts";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}
