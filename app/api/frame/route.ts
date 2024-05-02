import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const postUrl = "https://drakula-view.vercel.app";
  const imageUrl = "https://drakula-view.vercel.app/submain.png";

  const {
    untrustedData: { buttonIndex },
  } = await req.json();

  if (buttonIndex === 1) {
    return NextResponse.redirect("https://drakula-view.vercel.app", {
      status: 302,
    });
  }

  return new NextResponse(
    `<!DOCTYPE html><html><head>
    <title>View on Drakula</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="of:accepts:xmtp" content="2024-02-01" /> 
    <meta property="og:image" content="${imageUrl}"/>
    <meta property="fc:frame:image" content="${imageUrl}"/>
    <meta property="fc:frame:button:1" content="View" />
    <meta property="fc:frame:button:1:action" content="post"/>
    <meta property="fc:frame:button:2" content="Trending" />
    <meta property="fc:frame:button:2:action" content="post"/>
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



