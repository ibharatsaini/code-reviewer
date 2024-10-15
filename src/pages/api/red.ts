import { NextRequest, NextResponse } from "next/server";

const redirector=  (req:NextRequest , res:NextResponse) => {
    return NextResponse.redirect(new URL('http://2130706433:3000'))
}

export const runtime = 'edge'

export default redirector