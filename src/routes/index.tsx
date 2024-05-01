import ForgetPasswordPage from "pages/ForgetPassword";
import LoginPage from "pages/Login";
import RegisterPage from "pages/Regster";
import ResetPasswordPage from "pages/ResetPassword";
import VerifyPage from "pages/Verify";
import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "../components/AuthRoute";
import ErrorIndex from "../components/Error/Index";
import MainLayout from "../components/Layout/MainLayout";
import Article from "../pages/Article";
import Home from "../pages/Home";
import Vcard from "../pages/Vcard";

const routes: object[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorIndex />,
      },
    ],
    errorElement: <ErrorIndex />,
  },
  // {
  //   path: "/",
  //   element: <Home />,
  //   errorElement: <ErrorIndex />,
  // },

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

  // Following is authentic route

  /* 

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

*/
  // Following also  authentic route & use layout

  {
    element: <MainLayout />,
    children: [
      {
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
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
