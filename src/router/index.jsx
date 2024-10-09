import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { Welcome } from "@/pages/Welcome";
import { Login } from "@/pages/Login";
import { Main } from "@/pages/Main/Main";
import { Start } from "@/pages/Start";
import Cookies from "js-cookie";
import ProtectedRoute from "../auth/ProtectedRoute";
const data = Cookies.get("token") || Cookies.get("email");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "login",
    element: (
      <ProtectedRoute isAllowed={!data} redirectPath="/main">
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "main",
    element: (
      <ProtectedRoute isAllowed={data} redirectPath="/login">
        <Main />
      </ProtectedRoute>
    ),
  },
  {
    path: "start",
    element: (
      <ProtectedRoute isAllowed={data} redirectPath="/login">
        <Start />
      </ProtectedRoute>
    ),
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
