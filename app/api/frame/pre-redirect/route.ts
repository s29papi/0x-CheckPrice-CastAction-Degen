import { NextRequest, NextResponse } from 'next/server';
import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit';

async function getResponse(req: NextRequest): Promise<NextResponse> {
    const body: FrameRequest = await req.json();
    const { searchParams } = new URL(req.url);
    const fid = searchParams.get('fid')
    if (body.untrustedData.buttonIndex == 1) {
        return NextResponse.redirect(`https://drakula-view.vercel.app/redirect?fid=${fid}&&buttonIdx=${1}`, {status: 302});
    }
  return NextResponse.redirect("https://drakula-view.vercel.app/redirect?buttonIdx=2", {status: 302});
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';