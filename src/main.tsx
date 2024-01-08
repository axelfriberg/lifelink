import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { router } from "./pages/router.tsx";
import { RouterProvider } from "@tanstack/react-router";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>,
);
