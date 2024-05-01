import ForgetPasswordPage from "pages/ForgetPassword";
import LoginPage from "pages/Login";
import RegisterPage from "pages/Regster";
import ResetPasswordPage from "pages/ResetPassword";
import VerifyPage from "pages/Verify";
import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "../components/AuthRoute";
import ErrorIndex from "../components/Error/Index";
import Article from "../pages/Article";
import Home from "../pages/Home";
import Vcard from "../pages/Vcard";

const routes: object[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorIndex />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/verify",
    element: <VerifyPage />,
  },
  {
    path: "/forget-password",
    element: <ForgetPasswordPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },

  // Following is private route

  {
    path: "/",
    element: <AuthRoute />, // protected route
    children: [
      {
        path: "/vcard",
        element: <Vcard />,
      },
      {
        path: "/article",
        element: <Article />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
