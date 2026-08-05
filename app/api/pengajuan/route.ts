import { NextRequest, NextResponse } from "next/server";
import { APPS_SCRIPT_URL } from "@/src/lib/config";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const response = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return NextResponse.json(data);
}