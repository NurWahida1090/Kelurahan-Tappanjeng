import { NextResponse } from "next/server";
import { APPS_SCRIPT_URL } from "@/src/lib/config";

export async function POST(request:Request){

    const body=await request.json();

    const response=await fetch(APPS_SCRIPT_URL,{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify({

            action:"login",

            username:body.username,

            password:body.password

        })

    });

    const data=await response.json();

    return NextResponse.json(data);

}