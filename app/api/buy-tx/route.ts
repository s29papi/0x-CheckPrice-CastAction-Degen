import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { encodeFunctionData, formatEther, parseEther, parseUnits  } from 'viem';
import { base } from 'viem/chains';
import type { FrameTransactionResponse } from '@coinbase/onchainkit/frame';
import { getFarcasterUserAddress } from '@coinbase/onchainkit/farcaster';
// import HIGHERABI from "../../utils/higher-abi"
// import { HIGHER_BASE_CONTRACT_ADDR } from '@/app/utils/addrs';
// import qs from "qs";


async function getResponse(req: NextRequest): Promise<NextResponse | Response> { 
    const body: FrameRequest = await req.json();
    const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

    if (!isValid) {
        return new NextResponse('Message not valid', { status: 500 });
      }

    const farcasterUserAddress = await getFarcasterUserAddress(body.untrustedData.fid, {
         neynarApiKey: 'NEYNAR_ONCHAIN_KIT', 
    });

    let userAddr = farcasterUserAddress?.verifiedAddresses
    let usdc_amount = parseUnits(body.untrustedData.inputText, 6).toString() 
    let takerAddress;
    if (userAddr) {
        // takerAddress = `0x${userAddr[0].slice(2)}`
        takerAddress = "0x47dEAF612F0769d99aDB653bA2d22bba79F26C42"
    }
    let url = `https://base.api.0x.org/swap/v1/quote?sellToken=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&buyToken=0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe&sellAmount=${usdc_amount}&takerAddress=${takerAddress}`
    
    
    let option = {
        method: 'GET',
        headers: {accept: 'application/json', '0x-api-key': `${process.env.NEXT_PUBLIC_OX_KEY}`}
    }
    
    
    const response = await fetch(url, option);
    const jsonData = await response.json();

    
    let data = jsonData.data

    const txData: FrameTransactionResponse = {
        chainId: `eip155:${base.id}`,
        method: 'eth_sendTransaction',
        params: {
            abi: [],
            data,
            to: `0x${jsonData.to.slice(2)}`,
            value: parseEther('0.00000').toString(),
        },
    };
    
    return NextResponse.json(txData);
}


export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
  }
  
  export const dynamic = 'force-dynamic';