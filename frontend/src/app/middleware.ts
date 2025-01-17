import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  try {
    // Create an unmodified response
    let response = NextResponse.next();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll(); // Getting cookies from the request
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options) // Setting cookies in the response
            );
          },
        },
      },
    );

    // Refresh session if expired (for Server Components)
    const { data, error } = await supabase.auth.getUser();

    // Protected routes check
    if (request.nextUrl.pathname.startsWith("/protected") && error) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return response;
  } catch (e) {
    // Error handling if Supabase client creation fails
    console.error('Supabase client error:', e);
    return NextResponse.next();
  }
};
