import React, { createRef } from "react";
import BaseInput from "utils/Forms/BaseInput";
import FormModule from "utils/Forms/FormModule";

type Props = {};

const ForgetPassword = (props: Props) => {
  const [formData, setFormData] = React.useState({});
  const [errMessage, setErrMessage] = React.useState<any>({});
  const submitRef: any = createRef();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async () => {
    let response = await submitRef.current.handleSubmit();
    console.log(response);
    if (response) {
      const { data } = response;
      if (data) {
        setErrMessage({});
        console.log(data, "from login");
      } else {
        setErrMessage(response);
      }
    } else {
      setErrMessage({});
    }
  };

  return (
    <>
      <FormModule
        ref={submitRef}
        apiEndPoint={{ url: "/auth/forget-password", method: "postRequest" }}
        formData={formData}
        validationRule={{ email: "required|email" }}
      />
      <div className="flex items-center h-screen wrapper">
        <div className="space-y-5 p-4 bg-gray-100 w-[100vw] md:w-[60vw] xl:w-[28vw] mx-auto rounded shadow h-auto">
          <h2 className="">Forget Password</h2>
          <BaseInput
            name="email"
            label="Email"
            handleChange={handleInputChange}
            style={`${
              errMessage.email && "focus:border-red-400 border-red-400"
            }`}
          />
          {errMessage.email && (
            <p className="!mt-0 text-red-500 ">{errMessage.email}</p>
          )}

          <button
            onClick={handleSubmit}
            className="p-2 px-4 text-white bg-blue-600 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
