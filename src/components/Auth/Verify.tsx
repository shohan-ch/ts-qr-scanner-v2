import React from "react";
import BaseInput from "utils/Forms/BaseInput";

type Props = {};

const Verify = (props: Props) => {
  return (
    <>
      <div className="flex items-center h-screen wrapper">
        <div className="space-y-5 p-4 bg-gray-100 w-[100vw] md:w-[60vw] xl:w-[28vw] mx-auto rounded shadow max-h-[35vh]">
          <h2 className="">Verify Code</h2>
          <BaseInput
            name="text"
            label="Verify Code"
            handleChange={() => console.log(123)}
          />

          <button className="p-2 px-4 text-white bg-blue-600 rounded">
            Verify
          </button>
        </div>
      </div>
    </>
  );
};

export default Verify;
