import { NextRequest, NextResponse } from 'next/server';
import { FrameRequest, getFrameAccountAddress, getFrameMessage } from '@coinbase/onchainkit';


export async function POST(req: NextRequest): Promise<Response> {
  try {
    const body: FrameRequest = await req.json();
    const { isValid, message } = await getFrameMessage(body);
    if (isValid) {
      return new NextResponse(
      );
    }
  } catch(e) {
    return Response.redirect(
      'https://ethosmobile.org',
      302
    );
  }
  

  

  
}

export const dynamic = 'force-dynamic';
