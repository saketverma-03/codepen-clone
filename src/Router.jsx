import { useEffect } from "react";
import { Navigate, createBrowserRouter, useNavigate } from "react-router-dom";
import "./App.css";
import useAuthantication from "./hooks/useAuthantication";
import EditorPage from "./pages/EditorPage";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import { isAuthanticated } from "./server/util";

function AuthanticatedRoute({ children }) {
  const [user] = useAuthantication();
  const nav = useNavigate();
  if (!user) {
    return nav("/");
  }
  return children;
}

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/editor",
    element: (
      <AuthanticatedRoute>
        <EditorPage />
      </AuthanticatedRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <AuthanticatedRoute>
        <Homepage />
      </AuthanticatedRoute>
    ),
  },
]);
