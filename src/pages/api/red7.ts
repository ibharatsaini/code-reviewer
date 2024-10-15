import { NextRequest, NextResponse } from "next/server";

const redirector=  (req:NextRequest , res:NextResponse) => {
    return NextResponse.redirect(new URL('http://169.254.169.254/latest/meta-data/instance-id'))
}

export const runtime = 'edge'

export default redirector