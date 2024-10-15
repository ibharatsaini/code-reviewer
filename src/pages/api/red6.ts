import { NextRequest, NextResponse } from "next/server";

const redirector2 = (req: NextRequest, res: NextResponse) => {
  return NextResponse.redirect(new URL("https://7f000001.a9fea9fe.rbndr.us:8080/latest/meta-data/hostname"));
};

export const runtime = "edge";

export default redirector2;
