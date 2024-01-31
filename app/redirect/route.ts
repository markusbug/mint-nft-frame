import { NextRequest, NextResponse } from 'next/server';

function middleware(req: NextRequest) {
  // Check if the incoming request is a GET request
  if (req.method === 'GET') {
    // Redirect to the YouTube video
    return NextResponse.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }

  // For other methods, you can handle differently or just return a response
  return new Response(null, { status: 405 }); // 405 Method Not Allowed
}

export async function GET(req: NextRequest): Promise<Response> {
    return middleware(req);
}

export const dynamic = 'force-dynamic';
