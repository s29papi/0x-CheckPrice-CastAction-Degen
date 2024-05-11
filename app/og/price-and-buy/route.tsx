/* eslint-disable @next/next/no-img-element  */
// @ts-nocheck
import { ImageResponse } from 'next/og'

export const runtime = 'edge';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    let option = {
        method: 'GET',
        headers: {accept: 'application/json', '0x-api-key': `${process.env.NEXT_PUBLIC_OX_KEY}`}
    }

    const fontData1 = await fetch(
        new URL('../../../public/Jersey25Charted-Regular.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());
    
    let sellToken_usdc = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'
    let buyToken_degen = '0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe'
    let usdc_amount = '1000000'
    let url = `https://base.api.0x.org/swap/v1/price?sellToken=${sellToken_usdc}&buyToken=${buyToken_degen}&sellAmount=${usdc_amount}`
    const response = await fetch(url, option);
    const jsonData = await response.json();
    let price = parseFloat(jsonData.price).toFixed(2)
    return new ImageResponse(
        (
            <div
            style={{
              alignItems: 'center',
              background: '#32CD32',
              backgroundSize: '100% 100%',
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'nowrap',
              height: '100%',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <div
                 tw='flex flex-col'
            >
                <div 
                    tw="flex"
                    style={{
                        color: '#D2FF58',
                        fontSize: 80,
                        fontStyle: '"Jersey 25 Charted"',
                        letterSpacing: '-0.009em',
                        lineHeight: 1.4,
                        marginTop: 30,
                        padding: '0 120px',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                   1 USDC / {price} $ DEGEN
                </div>
            </div>
          </div>
        ),
        {
            fonts: [
                {
                    name: 'Jersey 25 Charted',
                    data: fontData1,
                    style: 'normal',
                    weight: 900
                }
            ]
        }
    )
}