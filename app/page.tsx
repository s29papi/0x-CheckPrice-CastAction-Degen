import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';


const frameMetadata = getFrameMetadata({
  buttons: [
      {label: ''},
  ],
  image: '',
  post_url: '',
});

export const metadata: Metadata = {
  title: '3 DNS Frame by 3DNS.',
  description: 'A frame to search if a domain exists, and to also purchase it.',
  openGraph: {
    title: '3 DNS Frame by 3DNS.',
    description: 'A frame to search if a domain exists, and to also purchase it.',
    images: [``],
  },
  other: {
    ...frameMetadata,
  },
};

export default async function Page() {
  return (
    <>
      <h1>3DNS DOMAIN REGISTER FRAME by 3DNS.</h1>
    </>
  );
}


// ref: https://www.pinata.cloud/blog/how-to-make-a-frame-on-farcaster-using-ipfs
// spec: https://docs.farcaster.xyz/reference/frames/spec
// playground: https://og-playground.vercel.app/





































