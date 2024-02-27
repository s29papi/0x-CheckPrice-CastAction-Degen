import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';


async function getResponse(req: NextRequest): Promise<NextResponse> {
const body: FrameRequest = await req.json();
let domainName: string = body.untrustedData.inputText;

let valid = await fetchData(domainName) 
if (valid == "STATUS_UNAVAILABLE") {
    return new NextResponse(`<!DOCTYPE html><html><head>
            <title>Success Page</title>
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="https://3dns-domain-register-frame.vercel.app/og?domainName=${domainName}"/>
            <meta property="fc:frame:button:1" content="Back" />
            <meta property="fc:frame:button:1:action" content="post"/>
            <meta property="fc:frame:post_url" content="https://3dns-domain-register-frame.vercel.app/api/frame/process"/>
            </head></html>`);
}

return new NextResponse(`<!DOCTYPE html><html><head>
  <title>Success Page</title>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://3dns-domain-register-frame.vercel.app/og?domainName=${domainName}"/>
  <meta property="fc:frame:button:1" content="Back" />
  <meta property="fc:frame:button:1:action" content="post"/>
  <meta property="fc:frame:button:2" content="Purchase" />
  <meta property="fc:frame:button:2:action" content="post_redirect"/>
  <meta property="fc:frame:post_url" content="https://3dns-domain-register-frame.vercel.app/api/frame/process?domainName=${domainName}"/>
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';


const fetchData = async (domain: string) => {
    let status;

    
    try {
      // Check if domain name contains a dot
      if (!domain.includes('.')) {
        // If not, concatenate ".com"
        domain += '.com';
      }
      
      const response = await fetch(`https://api.3dns.xyz/api/v1/core_backend_service/domain/check_domain/${domain}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      status = data.status;

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  
    return status;
  };
  