import Validate from "helpers/Validate";
import React, { createRef } from "react";
import { Link } from "react-router-dom";
import BaseInput from "utils/Forms/BaseInput";
import FormModule from "utils/Forms/FormModule";

type Props = {};

const Login = (props: Props) => {
  const [formData, setFormData] = React.useState({});
  const [errMessage, setErrMessage] = React.useState<any>({});
  const submitRef: any = createRef();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async () => {
    let response = await submitRef.current.handleSubmit();
    if (response) {
      const { data } = response;
      if (data) {
        setErrMessage({});
        console.log(data, "from login");
      } else {
        setErrMessage(response);
      }
    }
  };

  return (
    <>
      <FormModule
        ref={submitRef}
        apiEndPoint={"/auth/login"}
        formData={formData}
        validationRule={{ email: "required", password: "required" }}
      />

      <div className="flex items-center h-screen wrapper">
        <div className="space-y-5 p-4 bg-gray-100 w-[100vw] md:w-[60vw] xl:w-[28vw] mx-auto rounded-md shadow h-auto">
          <h2 className="">Login</h2>
          <BaseInput
            name="email"
            type="email"
            label="Email"
            handleChange={handleInputChange}
            style={`${
              errMessage.email && "focus:border-red-400 border-red-400"
            }`}
          />
          {errMessage.email && (
            <p className="!mt-0 text-red-500 ">{errMessage.email}</p>
          )}
          <BaseInput
            label="Password"
            name="password"
            handleChange={handleInputChange}
            style={`${
              errMessage.password && "focus:border-red-400 border-red-400"
            }`}
          />
          {errMessage.password && (
            <p className="!mt-0 text-red-500 ">{errMessage.password}</p>
          )}
          <div className="flex items-center justify-between">
            <button
              className="p-2 px-4 text-white bg-blue-600 rounded"
              onClick={handleSubmit}
            >
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
