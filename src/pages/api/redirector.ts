import { NextRequest, NextResponse } from "next/server";

const redirector=  (req:NextRequest , res:NextResponse) => {
    return NextResponse.redirect(new URL('http://codeiq.vercel.app/reviews'))
}

export const runtime = 'edge'

export default redirector