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
        name: '$Degen price check cast action',
        icon: 'graph',
        description: 'Farcaster Action to view the current price of $Degen, also to exchange it for usdc.',
        action: <Action> {
            type: 'post'
        } 
    }
    return NextResponse.json(actionDefination, { status: 200 });
}
