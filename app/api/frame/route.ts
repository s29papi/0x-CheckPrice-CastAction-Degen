import { NextRequest, NextResponse } from "next/server";
import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit';


export async function POST(req: NextRequest) {
    const body: FrameRequest = await req.json();
    
    let postUrl = "https://drakula-view.vercel.app/api/frame/pre-redirect";
    let imageUrl = "https://0x-check-price-cast-action.vercel.app/og/price-and-buy";
    


    return new NextResponse(
            `<!DOCTYPE html><html><head>
            <title>View on Drakula</title>
            <meta property="fc:frame" content="vNext" />
            <meta property="of:accepts:xmtp" content="2024-02-01" /> 
            <meta property="og:image" content="${imageUrl}"/>
            <meta property="fc:frame:image" content="${imageUrl}"/>
            <meta property="fc:frame:input:text" content="Enter Amount $HIGHER"/>
            <meta property="fc:frame:button:1" content="Buy" />
            <meta property="fc:frame:button:1:action" content="post_redirect"/>
            <meta property="fc:frame:post_url" content="${postUrl}"/>
            </head></html>`,
      {
        status: 200,
        headers: {
          "Content-Type": "text/html",
        },
      },
    );
}

export const GET = POST;



