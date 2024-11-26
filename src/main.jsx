import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ListMenu from "./page/ListMenu";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./page/App";
import DetailProduct from "./page/DetailProduct";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import Home from "./page/Home";
import Basket from "./page/Basket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/products",
    element: <ListMenu />,
  },
  {
    path: "/detail-product",
    element: <DetailProduct />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
]);

function RequireAuth({ children }) {
  const isAuthenticated = Cookies.get("token");
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);