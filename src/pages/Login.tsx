import { createPortal } from "react-dom";
import Login from "../components/Auth/Login";
import React, { useRef } from "react";
import AlertBar from "utils/Ui/AlertBar";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
