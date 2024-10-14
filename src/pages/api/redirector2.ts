import { NextRequest, NextResponse } from "next/server";

const redirector2=  (req:NextRequest , res:NextResponse) => {
    return NextResponse.redirect(new URL('http://localhost:80'))
}

export const runtime = 'edge'

export default redirector2