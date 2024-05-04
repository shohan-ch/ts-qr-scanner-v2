import React, { createRef, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BaseInput from "utils/Forms/BaseInput";
import FormModule from "utils/Forms/FormModule";
type Props = {};

const Verify = (props: Props) => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const [formData, setFormData] = React.useState({});
  const [errMessage, setErrMessage] = React.useState<any>({});
  const submitRef: any = createRef();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: Number(value) });
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
        apiEndPoint={{
          url: `/auth/verify-email?email=${email}`,
          method: "postRequest",
        }}
        formData={formData}
        validationRule={{ verify_code: "required|number" }}
        redirectRoute="/login"
      />
      <div className="flex items-center h-screen wrapper">
        <div className="space-y-5 p-4 bg-gray-100 w-[100vw] md:w-[60vw] xl:w-[28vw] mx-auto rounded shadow h-auto">
          <h2 className="">Verify Code</h2>
          <BaseInput
            name="verify_code"
            label="Verify Code"
            handleChange={handleInputChange}
            style={`${
              errMessage.verify_code && "focus:border-red-400 border-red-400"
            }`}
          />
          {errMessage.verify_code && (
            <p className="!mt-0 text-red-500 ">{errMessage.verify_code}</p>
          )}

          <button
            onClick={handleSubmit}
            className="p-2 px-4 text-white bg-blue-600 rounded"
          >
            Verify
          </button>
        </div>
      </div>
    </>
  );
};

export default Verify;
