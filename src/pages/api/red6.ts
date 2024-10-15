import { NextRequest, NextResponse } from "next/server";

const redirector2 = (req: NextRequest, res: NextResponse) => {
  return NextResponse.redirect(new URL("https://7f000001.c0a80001.rbndr.us"));
};

export const runtime = "edge";

export default redirector2;
