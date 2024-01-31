import { FrameRequest, getFrameAccountAddress, getFrameMessage } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  // This is where you set the 302 redirect response
  const response = new NextResponse(null, {
    status: 302,
    headers: {
      'Location': 'https://google.com',
    },
  });

  return response;
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
