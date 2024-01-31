import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Check if the incoming request is a GET request
  if (req.method === 'GET') {
    // Redirect to the YouTube video
    return NextResponse.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }

  // For other methods, you can handle differently or just return a response
  return new Response(null, { status: 405 }); // 405 Method Not Allowed
}

export const config = {
  matcher: '/', // Specify the path that this middleware applies to, '/' for all paths
};

export async function GET(req: NextRequest): Promise<Response> {
    return middleware(req);
  }