import { NextRequest, NextResponse } from 'next/server';

const FRAMES_URL = process.env.FRAMES_URL || "https://3dns-domain-register-frame.vercel.app";

async function getResponse(req: NextRequest): Promise<NextResponse> {
    return NextResponse.redirect(`${FRAMES_URL}/`, 302)
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';