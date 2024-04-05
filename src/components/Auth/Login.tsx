import React from "react";
import BaseInput from "utils/Forms/BaseInput";

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <div className="flex items-center h-screen wrapper">
        <div className="space-y-5 p-4 bg-gray-100 w-[25vW] mx-auto rounded shadow h-[35vh]">
          <h2 className="">Login</h2>
          <BaseInput
            name="name"
            label="Name"
            handleChange={() => console.log(123)}
          />
          <BaseInput
            label="Password"
            name="password"
            handleChange={() => console.log(123)}
          />
          <button className="p-2 px-4 text-white bg-blue-600 rounded">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
