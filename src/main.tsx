import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRoutes from "@/routes";
import { GlobalStyle } from "@/styles/global.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </StrictMode>,
);
