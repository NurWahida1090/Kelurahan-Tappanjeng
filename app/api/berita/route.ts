import { NextRequest, NextResponse } from "next/server";
import { APPS_SCRIPT_URL } from "@/src/lib/config";

export async function GET(request: NextRequest) {

  const slug = request.nextUrl.searchParams.get("slug");

  let url = `${APPS_SCRIPT_URL}?action=berita`;

  if (slug) {
    url += `&slug=${encodeURIComponent(slug)}`;
  }

  const response = await fetch(url, {
    cache: "no-store",
  });

  const data = await response.json();

  return NextResponse.json(data);
}