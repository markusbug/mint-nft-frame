import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'ethOS NFT Mint',
  description: 'LFG',
  openGraph: {
    title: 'ethOS NFT Mint',
    description: 'LFG',
    images: ['https://zizzamia.xyz/park-1.png'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:button:1': 'Send 0.0001 eth to mhaas.eth',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': 'https://ethos-wallet-url/sendTransaction/0x3a4e6eD8B0F02BFBfaA3C6506Af2DB939eA5798c/0.0001/0/1',
    'fc:frame:image': 'https://test-frame-six.vercel.app/framepic.png',
    'fc:frame:post_url': 'https://test-frame-six.vercel.app/api/frame'
  },
};

export default function Page() {
  return (
    <>
      <h1>ethOS NFT mint in-feed</h1>
    </>
  );
}
