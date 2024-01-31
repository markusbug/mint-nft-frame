import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  // Set the 302 redirect response to the "/redirect" path
  const response = new NextResponse(null, {
    status: 302,
    headers: {
      'Location': '/redirect', // Redirect to the "/redirect" path
    },
  });

  return response;
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
