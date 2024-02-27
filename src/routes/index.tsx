import { createBrowserRouter } from "react-router-dom";
import ErrorIndex from "../components/Error/Index";
import Home from "../pages/Home";
import Vcard from "../pages/Vcard";

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
];

const router = createBrowserRouter(routes);

export default router;
