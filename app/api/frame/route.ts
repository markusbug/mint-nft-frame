import { NextRequest, NextResponse } from 'next/server';



export async function POST(req: NextRequest): Promise<Response> {
  return Response.redirect(
    'https://ethosmobile.org',
    302
  );
}

export const dynamic = 'force-dynamic';
