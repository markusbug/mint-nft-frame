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
    'fc:frame:button:1': 'Mint NFT in-feed',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': 'https://ethos-wallet-url/sendTransaction/0x0A401960CFB6082814ed06b9759e5486CDad97e5/0.000777/0x9dbb844d00000000000000000000000004e2516a2c207e84a1839755675dfd8ef6302f0a0000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000003a4e6ed8b0f02bfbfaa3c6506af2db939ea5798c/7777777',
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
