import { createBrowserRouter } from "react-router-dom";
import ErrorIndex from "../components/Error/Index";
import Home from "../pages/Home";
import Vcard from "../pages/Vcard";
import Article from "../pages/Article";
import LoginPage from "pages/Login";

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
];

const router = createBrowserRouter(routes);

export default router;
