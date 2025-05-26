import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define protected routes that require authentication
const isProtectedRoute = createRouteMatcher([
  "/",
  "/admin(.*)",
  // "/api/courses(.*)",
  // "/api/notes(.*)",
  // "/api/community(.*)",
  // "/api/comments(.*)",
  // "/api/likes(.*)",
  // "/api/tweets(.*)",
]);

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/_next(.*)",
  "/favicon.ico",
]);

export default clerkMiddleware(async (auth, req) => {
  try {
    const { userId } = await auth();
    const path = req.nextUrl.pathname;

    // Log authentication status and path
    console.log(`Auth middleware: Path=${path}, Authenticated=${!!userId}`);

    // Allow public routes to bypass authentication
    if (isPublicRoute(req)) {
      console.log(`Public route accessed: ${path}`);
      return NextResponse.next();
    }

    // Redirect to sign-in if trying to access protected routes without authentication
    if (!userId && isProtectedRoute(req)) {
      console.log(`Protected route accessed without authentication: ${path}`);
      const { redirectToSignIn } = await auth();
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    console.log(`User authenticated, proceeding: ${path}`);
    return NextResponse.next();
  } catch (error) {
    console.error("Error in auth middleware:", error);
    // For API routes, return an error response
    if (req.nextUrl.pathname.startsWith("/api/")) {
      return new Response("Authentication error", { status: 401 });
    }
    // For other routes, redirect to sign-in
    const { redirectToSignIn } = await auth();
    return redirectToSignIn({ returnBackUrl: req.url });
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
