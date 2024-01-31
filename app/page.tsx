import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Test',
    },
  ],
  image: 'https://zizzamia.xyz/park-1.png',
  post_url: 'https://test-frame-six.vercel.app/api/frame',
});

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: ['https://zizzamia.xyz/park-1.png'],
  },
  other: {
    ...frameMetadata,
    'fc:frame:button:2': 'Open Website',
    'fc:frame:button:2:action': 'post_redirect'
  },
};

export default function Page() {
  return (
    <>
      <h1>zizzamia.xyz</h1>
    </>
  );
}
