import { NextRequest, NextResponse } from 'next/server';

type Action = {
    type: string;
}

type ActionDefination = {
    name: string;
    icon: string;
    description: string;
    maboutUrl?: string;
    action: Action;
};

export async function getResponseGET(req: NextRequest): Promise<NextResponse> {
    const actionDefination: ActionDefination = {
        name: 'View user on Drakula.app',
        icon: 'device-desktop',
        description: 'Farcaster Action to view a cast authors user profile, if exists, on Drakula.',
        action: <Action> {
            type: 'post'
        } 
    }
    return NextResponse.json(actionDefination, { status: 200 });
}
