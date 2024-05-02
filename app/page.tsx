import { redirect } from 'next/navigation'
import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const REDIRECT_URL = process.env.REDIRECT_URL || "https://drakula.app"
const FRAMES_URL = process.env.FRAMES_URL || "https://drakula-view.vercel.app"
const imageUrl = new URL("/main.png", FRAMES_URL).href
const postUrl = new URL("/api/frame", FRAMES_URL).href

const frameMetadata = getFrameMetadata({
  buttons: [
    {label: 'Install View on Drakula', action: 'link', target: 'https://warpcast.com/~/add-cast-action?url=https%3A%2F%2Fdrakula-view-actions.vercel.app%2Fapi%2FgetMetadata'},
  ],
  image: imageUrl,
  post_url: postUrl,

});

export const metadata: Metadata = {
  title: '3 DNS Frame by 3DNS.',
  description: 'A frame to search if a domain exists, and to also purchase it via 3dns.',
  openGraph: {
    title: '3 DNS Frame by 3DNS.',
    description: 'A frame to search if a domain exists, and to also purchase it via 3dns.',
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


































