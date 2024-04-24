import React from "react";
import { Link } from "react-router-dom";
import BaseInput from "utils/Forms/BaseInput";

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <div className="flex items-center h-screen wrapper">
        <div className="space-y-5 p-4 bg-gray-100 w-[100vw] md:w-[60vw] xl:w-[28vw] mx-auto rounded-md shadow h-[35vh]">
          <h2 className="">Login</h2>
          <BaseInput
            name="email"
            type="email"
            label="Email"
            handleChange={() => console.log(123)}
          />
          <BaseInput
            label="Password"
            name="password"
            type="password"
            handleChange={() => console.log(123)}
            style="!mb-10"
          />
          <div className="flex items-center justify-between">
            <button className="p-2 px-4 text-white bg-blue-600 rounded">
              Login
            </button>
            <p>
              Don't have an account.{" "}
              <Link
                to={"/register"}
                style={{ color: "blue", fontWeight: "bold" }}
              >
                Register
              </Link>{" "}
              here
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
