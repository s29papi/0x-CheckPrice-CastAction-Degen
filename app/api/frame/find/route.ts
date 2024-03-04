import { FrameRequest} from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

const FRAMES_URL = process.env.FRAMES_URL || "https://3dns-domain-register-frame.vercel.app"
const imageUrl = new URL("/search-rescale.png", FRAMES_URL).href
const postUrl = new URL("/api/frame/find", FRAMES_URL).href
const timeoutImageUrl = new URL("/3dns_Service_Unavailable_503.png", FRAMES_URL).href
const refreshPostUrl = new URL("/api/frame/refresh", FRAMES_URL).href
const processPostUrl = new URL("/api/frame/process", FRAMES_URL).href



async function getResponse(req: NextRequest): Promise<NextResponse> {
    const body: FrameRequest = await req.json();
    let domainName: string = body.untrustedData.inputText;
    let data = await fetchData(domainName) 
    const ogImageUrl = new URL(`/og?domainName=${data.domainName}&&renewalFee=${data.renewalFee}&&firstYearRegistrationFee=${data.firstYearRegistrationFee}&&status=${data.status}`, FRAMES_URL).href


    if (data.timeOut) {
          return new NextResponse(`<!DOCTYPE html><html><head>
          <title>Success Page</title>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${timeoutImageUrl}"/>
          <meta property="fc:frame:button:1" content="Refresh" />
          <meta property="fc:frame:button:1:action" content="post"/>
          <meta property="fc:frame:post_url" content="${refreshPostUrl}"/>
          </head></html>`);
    }
 

    if (data.status == "STATUS_UNAVAILABLE") {
        return new NextResponse(`<!DOCTYPE html><html><head>
                <title>Success Page</title>
                <meta property="fc:frame" content="vNext" />
                <meta property="fc:frame:image" content="${ogImageUrl}"/>
                <meta property="fc:frame:button:1" content="Back" />
                <meta property="fc:frame:button:1:action" content="post"/>
                <meta property="fc:frame:post_url" content="${processPostUrl}"/>
                </head></html>`);
    }

    return new NextResponse(`<!DOCTYPE html><html><head>
      <title>Success Page</title>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${ogImageUrl}"/>
      <meta property="fc:frame:button:1" content="Back" />
      <meta property="fc:frame:button:1:action" content="post"/>
      <meta property="fc:frame:button:2" content="Purchase" />
      <meta property="fc:frame:button:2:action" content="post_redirect"/>
      <meta property="fc:frame:post_url" content="${processPostUrl}?domainName=${data.domainName}"/>
      </head></html>`);
 }

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';

const fetchData = async (domain: string) => {
  let status;
  let firstYearRegistrationFee;
  let renewalFee;
  let domainName;
  let timeOut;
  
  try {
    if (!domain.includes('.')) {
      domain += '.com';
    }
    
    const response = await fetch(`https://api.3dns.xyz/api/v1/core_backend_service/domain/check_domain/${domain}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    status = data.status;
    firstYearRegistrationFee = data.price.CURRENCY_USD.firstYearRegistrationFee;
    renewalFee = data.price.CURRENCY_USD.renewalFee;
    domainName = data.domain;
  } catch (error) {
    console.error('Error fetching data:', error);
    timeOut = true;
  }

  return { status, firstYearRegistrationFee, renewalFee, domainName, timeOut};
};