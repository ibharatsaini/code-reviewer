import { NextRequest, NextResponse } from "next/server";

const redirector2 = (req: NextRequest, res: NextResponse) => {
  return NextResponse.redirect(new URL("https://a9fea9fe.c0a80001.rbndr.us/latest/meta-data/hostname"));
};

export const runtime = "edge";

export default redirector2;
