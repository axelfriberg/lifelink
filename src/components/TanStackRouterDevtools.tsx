import { lazy } from "react";

export const TanStackRouterDevtools =
  import.meta.env.MODE === "production"
    ? () => null
    : lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );
