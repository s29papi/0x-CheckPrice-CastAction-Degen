import { redirect } from 'next/navigation'
import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';


const frameMetadata = getFrameMetadata({
  buttons: [
      {label: 'Buy 🛍️', action: 'post'},
  ],
  image: 'https://3dns-domain-register-frame.vercel.app/3dns-buy-a-domain-rescale.png',
  post_url: 'https://3dns-domain-register-frame.vercel.app/api/frame',

});

export const metadata: Metadata = {
  title: '3 DNS Frame by 3DNS.',
  description: 'A frame to search if a domain exists, and to also purchase it via 3dns.',
  openGraph: {
    title: '3 DNS Frame by 3DNS.',
    description: 'A frame to search if a domain exists, and to also purchase it via 3dns.',
    images: [`https://3dns-domain-register-frame.vercel.app/3dns-buy-a-domain-rescale.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default async function Page() {
    const redirectUrl = `https://app.3dns.box`;

    redirect(redirectUrl)
}


// ref: https://www.pinata.cloud/blog/how-to-make-a-frame-on-farcaster-using-ipfs
// spec: https://docs.farcaster.xyz/reference/frames/spec
// playground: https://og-playground.vercel.app/





































