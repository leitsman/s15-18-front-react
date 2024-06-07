import AuthMiddleware from "./middlewares/auth.middleware";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  return
  return AuthMiddleware(request);
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
