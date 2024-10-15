import { NextRequest, NextResponse } from "next/server";

const redirector=  (req:NextRequest , res:NextResponse) => {
    return NextResponse.redirect(new URL('http://127.0.0.1:443'))
}

export const runtime = 'edge'

export default redirector