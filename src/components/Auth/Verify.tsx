import useApi from "api/useApi";
import ValidationBase from "helpers/ValidationBase";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BaseInput from "utils/Forms/BaseInput";
import AlertBar from "utils/Ui/AlertBar";

type Props = {};

const Verify = (props: Props) => {
  const api = useApi();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errMessage, setErrMessage] = useState<any>({});
  const [isOpen, setIsOpen] = useState(false);
  const [allertMessage, setAllertMessage] = useState("");
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: Number(value) });
  };

  const validationOfBase = () => {
    let isValidate = ValidationBase(formData, {
      verify_code: "required|number",
    });
    setErrMessage(isValidate);
    if (isValidate === true) {
      return true;
    }
  };

  const handleSubmit = async () => {
    if (validationOfBase()) {
      const { data, error } = await api.postRequest(
        `/auth/verify-email?email=${email}`,
        formData
      );
      if (error) {
        const { data: errorResponse } = error;
        setAllertMessage(
          (Array.isArray(errorResponse) && errorResponse[0]) || errorResponse
        );
        setIsOpen(true);
      } else {
        setAllertMessage(data);
        setIsOpen(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
  };

  return (
    <>
      <AlertBar
        open={isOpen}
        onClose={handleClose}
        type="error"
        message={allertMessage || "All fields are required"}
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
