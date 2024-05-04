import useApi from "api/useApi";
import React, { createRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useSearchParams } from "react-router-dom";
import BaseInput from "utils/Forms/BaseInput";
import FormModule from "utils/Forms/FormModule";
import AlertBar from "utils/Ui/AlertBar";

type Props = {};

const ResetPassword = (props: Props) => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const api = useApi();

  const [formData, setFormData] = React.useState({});
  const [errMessage, setErrMessage] = React.useState<any>({});
  const [tokenErr, setTokenErr] = React.useState("");
  const submitRef: any = createRef();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    verifyApiCall();
  }, []);

  const verifyApiCall = async () => {
    const { data, error } = await api.postRequest(
      `/auth/verify-reset-token?token=${token}&email=${email}`,
      {}
    );
    if (error) {
      setTokenErr(error.data);
    } else {
      setTokenErr("");
    }
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
        apiEndPoint={{
          url: `/auth/reset-password?token=${token}`,
          method: "postRequest",
        }}
        formData={formData}
        validationRule={{
          password: "required",
          confirmPassword: "required|matchPassword",
        }}
        redirectRoute="/login"
      />
      <div className="flex items-center h-screen wrapper">
        <div className="space-y-5 p-4 bg-gray-100 w-[100vw] md:w-[60vw] xl:w-[28vw] mx-auto rounded shadow h-auto">
          <h2 className="">Reset Password</h2>
          <BaseInput
            name="password"
            label="Password"
            handleChange={handleInputChange}
            style={`${
              errMessage.password && "focus:border-red-400 border-red-400"
            }`}
          />
          {errMessage.password && (
            <p className="!mt-0 text-red-500 ">{errMessage.password}</p>
          )}

          <BaseInput
            label="Confirm Password"
            name="confirmPassword"
            handleChange={handleInputChange}
            style={`${
              errMessage.confirmPassword &&
              "focus:border-red-400 border-red-400"
            }`}
          />
          {errMessage.confirmPassword && (
            <p className="!mt-0 text-red-500 ">{errMessage.confirmPassword}</p>
          )}

          {tokenErr && <p className="!mt-0 text-red-500 ">{tokenErr}</p>}
          <button
            disabled={!!tokenErr}
            onClick={handleSubmit}
            className="p-2 px-4 text-white bg-blue-600 rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
