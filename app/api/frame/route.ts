import { NextRequest, NextResponse } from 'next/server';
import { FrameRequest, getFrameAccountAddress, getFrameMessage } from '@coinbase/onchainkit';


export async function POST(req: NextRequest): Promise<Response> {
  return Response.redirect(
    'https://google.com',
    302
  );

  
}

export const dynamic = 'force-dynamic';
