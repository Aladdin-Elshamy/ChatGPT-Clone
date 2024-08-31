import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { Welcome } from "@/pages/Welcome";
import { Login } from "@/pages/Login";
import { Main } from "@/pages/Main/Main";
import { Start } from "@/pages/Start";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/start",
    element: <Start />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
