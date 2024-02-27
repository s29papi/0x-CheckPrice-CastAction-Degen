import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();

  return  new NextResponse(`<!DOCTYPE html><html><head>
  <title>Search</title>
  <meta property="fc:frame" content="vNext" />
  <meta property="og:image" content="http://localhost:3002/search-rescale.png"/>
  <meta property="fc:frame:image" content="http://localhost:3002/search-rescale.png"/>
  <meta property="fc:frame:input:text" content="Enter Domain ( Deafult: .com )" />
  <meta property="fc:frame:button:1" content="Search" />
  <meta property="fc:frame:button:1:action" content="post"/>
  <meta property="fc:frame:post_url" content="http://localhost:3002/api/frame/find"/>
 </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';



