import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';


async function getResponse(req: NextRequest): Promise<NextResponse> {
const body: FrameRequest = await req.json();

if (body.untrustedData.inputText) {
    throw new Error("Error resolving body json");
}
return new NextResponse(`<!DOCTYPE html><html><head>
  <title>Success Page</title>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://3dns-domain-register-frame.vercel.app/og?domainName=${body.untrustedData.inputText}"/>
  <meta property="fc:frame:button:1" content="Complete" />
  <meta property="fc:frame:button:1:action" content="post"/>
  <meta property="fc:frame:post_url" content=""/>
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';