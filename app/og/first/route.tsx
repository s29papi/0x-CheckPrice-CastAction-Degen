/* eslint-disable @next/next/no-img-element  */
// @ts-nocheck
import { ImageResponse } from 'next/og'

export const runtime = 'edge';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const fontData1 = await fetch(
        new URL('../../../public/Jersey25Charted-Regular.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());

    
    return new ImageResponse(
        (
            <div
                style={{
                    alignItems: 'center',
                    background: 'purple',
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
                        color: 'white',
                        fontSize: 80,
                        fontStyle: '"Jersey 25 Charted"',
                        letterSpacing: '-0.009em',
                        lineHeight: 1.4,
                        marginTop: 30,
                        padding: '0 120px',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                   $Degen Price Checker 
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