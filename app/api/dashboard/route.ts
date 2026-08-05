import { NextResponse } from "next/server";
import { APPS_SCRIPT_URL } from "@/src/lib/config";

export async function GET(){

    const response=await fetch(

        `${APPS_SCRIPT_URL}?action=dashboard`

    );

    const data=await response.json();

    return NextResponse.json(data);

}