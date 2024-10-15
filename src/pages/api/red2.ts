import { NextRequest, NextResponse } from "next/server";

const redirector=  (req:NextRequest , res:NextResponse) => {
    return NextResponse.redirect(new URL('http://0.0.0.0:80'))
}

export const runtime = 'edge'

export default redirector