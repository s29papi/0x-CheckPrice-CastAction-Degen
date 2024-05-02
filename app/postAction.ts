import { NextRequest, NextResponse } from 'next/server';
import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit';


export async function getResponsePOST(req: NextRequest): Promise<NextResponse> {
    const body: FrameRequest = await req.json();
    const { isValid } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

    if (!isValid) {
        return new NextResponse('Message not valid', { status: 500 });
    }

    const frame = {
        "type": "frame",
        "frameUrl": "https://drakula-view.vercel.app/frame"
      }

    return NextResponse.json(frame, { status: 200 });
}

