import { createBrowserRouter } from "react-router-dom";
import ErrorIndex from "../components/Error/Index";
import Home from "../pages/Home";
import Vcard from "../pages/Vcard";
import Article from "../pages/Article";
import LoginPage from "pages/Login";
import RegisterPage from "pages/Regster";
import VerifyPage from "pages/Verify";
import ForgetPasswordPage from "pages/ForgetPassword";
import ResetPasswordPage from "pages/ResetPassword";

const routes: object[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorIndex />,
  },
  {
    path: "vcard",
    element: <Vcard />,
  },

  {
    path: "/article",
    element: <Article />,
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
];

const router = createBrowserRouter(routes);

export default router;
