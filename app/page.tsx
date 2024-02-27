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
    'fc:frame:button:1': 'Cook my Treasure Mole on Optimism',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': 'https://ethos-wallet-url/sendTransaction/0x1297766F4e2B28367C2073D26723e9F107465bF6/0.0/0x1249c58b/10',
    'fc:frame:image': 'https://mint-nft-frame.vercel.app/mintframepic.png',
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
