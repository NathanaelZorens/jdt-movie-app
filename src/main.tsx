import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { TokenProvider } from "./hooks/useToken.tsx";
import { router } from "./routes/routes.tsx";
import "./style/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <title>Movie App</title>
    <TokenProvider>
      <RouterProvider router={router} />
    </TokenProvider>
  </StrictMode>
);
