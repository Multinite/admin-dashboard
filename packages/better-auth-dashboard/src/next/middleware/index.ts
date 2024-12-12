import type { NextRequest, NextResponse } from "next/server";

export type DashboardMiddlewareOptions = {
  baseURL?: string;
};

export const dashboardMiddleware = (
  callback: (
    request?: NextRequest
  ) => Promise<void | NextResponse> | void | NextResponse,
  options: DashboardMiddlewareOptions = {}
) => {
  return async (request: NextRequest) => {
    const { baseURL = new URL(request.url).origin } = options;

    const getSessionURL = new URL("/auth/get-session", baseURL);
    fetch(getSessionURL, {
      headers: request.headers,
    })
      .then((response) => response.json)
      //@ts-expect-error - intentional
      .then(({ data, error }: { data: unknown; error: Error | null }) => {
        console.log(`middleware fetched:`, data, error);
        if (error) {
          console.error(error);
          throw error;
        }
      });

    return await callback(request);
  };
};

export const dashboardMatcher = () => {
  return [`/dashboard/:path*`];
};
