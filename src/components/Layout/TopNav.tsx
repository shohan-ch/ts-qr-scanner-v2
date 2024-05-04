import authStorage from "helpers/AuthStorage";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

const TopNav = (props: Props) => {
  const naviage = useNavigate();
  const handleLogout = () => {
    authStorage.clear();
    naviage("/login");
  };
  return (
    <>
      <div className="w-full h-12 px-2 py-3 mb-5 text-black bg-gray-200 shadow">
        <div className="mx-auto ml-auto max-w-7xl">
          <div className="flex text-base font-semibold gap-x-4 float-end">
            <Link to={"/article"}>Article</Link>
            {(authStorage.get() && (
              <button onClick={handleLogout}>Logout</button>
            )) || <Link to="/login">Login</Link>}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
