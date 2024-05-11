import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { encodeFunctionData, formatEther, parseEther, parseUnits  } from 'viem';
import { base } from 'viem/chains';
import type { FrameTransactionResponse } from '@coinbase/onchainkit/frame';
import { getFarcasterUserAddress } from '@coinbase/onchainkit/farcaster';
import HIGHERABI from "../../utils/higher-abi"
import { HIGHER_BASE_CONTRACT_ADDR } from '@/app/utils/addrs';


async function getResponse(req: NextRequest): Promise<NextResponse | Response> { 
    const body: FrameRequest = await req.json();
    const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

    if (!isValid) {
        return new NextResponse('Message not valid', { status: 500 });
      }

    // if (body.untrustedData.fid) {
    //     const farcasterUserAddress = await getFarcasterUserAddress(body.untrustedData.fid, {
    //         neynarApiKey: 'NEYNAR_ONCHAIN_KIT', 
    //       });
    // }

    let option = {
        method: 'GET',
        headers: {accept: 'application/json', '0x-api-key': `${process.env.NEXT_PUBLIC_OX_KEY}`}
    }

    let sellToken_usdc = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'
    let buyToken_higher = '0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed'
    let usdc_amount = parseUnits(body.untrustedData.inputText, 6) 
    let url = `https://base.api.0x.org/swap/v1/quote?sellToken=${sellToken_usdc}&buyToken=${buyToken_higher}&sellAmount=${usdc_amount}`
    const response = await fetch(url, option);
    const jsonData = await response.json();

    
    let data = encodeFunctionData({
        abi: HIGHERABI,
        functionName: 'approve',
        args: [ `0x${jsonData.allowanceTarget.slice(2)}`, parseUnits(body.untrustedData.inputText, 6) ],
    })

    
    const txData: FrameTransactionResponse = {
        chainId: `eip155:${base.id}`,
        method: 'eth_sendTransaction',
        params: {
            abi: [],
            data,
            to: `0x${sellToken_usdc.slice(2)}`,
            value: parseEther('0.00000').toString(),
        },
    };
    
    return NextResponse.json(txData);

}


export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
  }
  
  export const dynamic = 'force-dynamic';