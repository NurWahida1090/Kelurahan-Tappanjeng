import { NextResponse } from "next/server";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbyA88hcKPqsfKjk859l3DlnzMqR6Anao4pBE7R2KE4P-dtzBs2qdPMD6zkk6obOMrZo/exec";

export async function GET() {
  const res = await fetch(
    `${GAS_URL}?action=statistikPengajuan`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}