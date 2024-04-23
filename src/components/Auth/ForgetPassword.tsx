import React from "react";
import BaseInput from "utils/Forms/BaseInput";

type Props = {};

const ForgetPassword = (props: Props) => {
  return (
    <>
      <div className="flex items-center h-screen wrapper">
        <div className="space-y-5 p-4 bg-gray-100 w-[100vw] md:w-[60vw] xl:w-[28vw] mx-auto rounded shadow h-auto">
          <h2 className="">Forget Password</h2>
          <BaseInput
            name="email"
            label="Email"
            handleChange={() => console.log(123)}
          />

          <button className="p-2 px-4 text-white bg-blue-600 rounded">
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
