import authStorage from "helpers/AuthStorage";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  let token = authStorage.get();
  return !token ? <Navigate to={"/login"} /> : <Outlet />;
};

export default AuthRoute;
