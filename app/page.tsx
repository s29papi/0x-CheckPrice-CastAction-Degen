import { redirect } from 'next/navigation'
import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
   
const REDIRECT_URL = process.env.REDIRECT_URL || "https://0x.org/"
const FRAMES_URL = process.env.FRAMES_URL || "https://0x-check-price-cast-action.vercel.app"
const imageUrl = new URL("/og/first", FRAMES_URL).href
const postUrl = new URL("/", FRAMES_URL).href

const frameMetadata = getFrameMetadata({
  buttons: [
    {label: 'Install $HIGHER Price check', action: 'link', target: 'https://warpcast.com/~/add-cast-action?url=https%3A%2F%2F0x-check-price-cast-action.vercel.app%2Fapi%2Faction%2FgetMetadata'},
  ],
  image: {
    src: imageUrl,
    aspectRatio: '1.91:1'  
  },
  post_url: postUrl,

});

export const metadata: Metadata = {
  title: 'Frame Install 0x Price Check Cast Action.',
  description: 'A frame used to install 0x Price Check Cast Action.',
  openGraph: {
    title: 'Frame Install 0x Price Check Cast Action.',
    description: 'A frame used to install 0x Price Check Cast Action.',
    images: [imageUrl],
  },
  other: {
    'of:accepts:xmtp': '2024-02-01',
    ...frameMetadata,
  },
};

export default async function Page() {
  const redirectUrl = REDIRECT_URL;
  redirect(redirectUrl)
}


































