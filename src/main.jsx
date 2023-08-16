import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Router.jsx";
import "./scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>
);

function ThemeProvider({ children }) {
  const theme = window.matchMedia("(prefers-color-scheme: dark)");

  console.log(theme);
  return (
    <div className="body" data-theme={"dark"}>
      {children}
    </div>
  );
}
