import { NextResponse } from "next/server";

async function AuthMiddleware(req) {
  const isLoggedIn = req.cookies.get("token");

  const loggedOutAllowedPaths = [
    "/home",
    "/login",
    "/register",
    "/onboarding",
    "/api/auth/login",
    "/api/auth/register",
  ];

  const loggedInForbiddenPaths = ["/home", "/login", "/register"];

  if (!isLoggedIn?.value) {
    if (!loggedOutAllowedPaths.includes(req.nextUrl.pathname))
      return NextResponse.redirect(new URL("/home", req.url));
  } else {
    if (loggedInForbiddenPaths.includes(req.nextUrl.pathname))
      return NextResponse.redirect(new URL("/", req.url));
  }
}

export default AuthMiddleware;
