import { NextRequest, NextResponse } from 'next/server';
import { FrameRequest, getFrameAccountAddress, getFrameMessage } from '@coinbase/onchainkit';


export async function POST(req: NextRequest): Promise<Response> {
  return Response.redirect(
    'https://test-frame-six.vercel.app/redirect',
    302
  );

  
}

export const dynamic = 'force-dynamic';
