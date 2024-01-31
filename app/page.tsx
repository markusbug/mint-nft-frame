import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: ['https://zizzamia.xyz/park-1.png'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:button:1': 'Open Website',
    'fc:frame:button:1:url': 'https://ethosmobile.org',
    'fc:frame:image': 'https://redirect-frame.vercel.app/video.png',
    'fc:frame:post_url': 'https://test-frame-six.vercel.app/api/frame'
  },
};

export default function Page() {
  return (
    <>
      <h1>zizzamia.xyz</h1>
    </>
  );
}
