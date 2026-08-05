import { NextResponse } from "next/server";
import { APPS_SCRIPT_URL } from "@/src/lib/config";

export async function GET() {

  try {

    const response = await fetch(

      `${APPS_SCRIPT_URL}?action=profil`,

      {
        cache: "no-store"
      }

    );

    const data = await response.json();

    return NextResponse.json(data);

  } catch (error) {

    return NextResponse.json({

      success:false,

      message:"Gagal mengambil data profil"

    });

  }

}