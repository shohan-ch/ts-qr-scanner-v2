import useApi from "api/useApi";
import Validate from "helpers/Validate";
import ValidationBase from "helpers/ValidationBase";
import { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import BaseInput from "utils/Forms/BaseInput";
import AlertBar from "utils/Ui/AlertBar";

type Props = {};

const Register = (props: Props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<any>({});
  const [errMessage, setErrMessage] = useState<any>({});
  const [isOpen, setIsOpen] = useState(false);
  const [allertMessage, setAllertMessage] = useState("");
  const api = useApi();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validationOfSingleField({ name, value });
    setFormData({ ...formData, [name]: value });
  };

  const validationOfSingleField = (formData: any) => {
    //  Following have to add rules for input
    const validationMsg = Validate(formData, {
      name: "required|string|min:5|max:15",
      email: "required|email",
      password: "required|min:5",
      confirm_password: "required|matchPassword",
    });
    setErrMessage({ ...errMessage, [formData.name]: validationMsg });
  };

  // const chekValidation = () => {
  //   // Following length is static input field count of a form
  //   if (Object.keys(errMessage).length !== 4) {
  //     setIsOpen(true);
  //     return false;
  //   }
  //   for (let key in errMessage) {
  //     if (errMessage[key]) {
  //       return false;
  //     }
  //   }
  //   localStorage.clear();
  //   return true;
  // };

  const validationOfBase = () => {
    let isValidate = ValidationBase(formData, {
      name: "required|string|min:5|max:15",
      email: "required|email",
      password: "required|min:5",
      confirm_password: "required|matchPassword",
    });
    setErrMessage(isValidate);
    if (isValidate === true) {
      localStorage.clear();
      return true;
    }
  };

  const showMessage = (data: any, err: any) => {
    if (err) {
      const { data: errorResponse } = err;
      setAllertMessage(
        (Array.isArray(errorResponse) && errorResponse[0]) || errorResponse
      );
    } else {
      setAllertMessage(data);
    }
    setIsOpen(true);
  };

  const handleSubmit = async () => {
    if (validationOfBase()) {
      const { data, error } = await api.postRequest("/auth/registar", formData);
      // showMessage(data, error);
      if (error) {
        const { data: errorResponse } = error;
        setAllertMessage(
          (Array.isArray(errorResponse) && errorResponse[0]) || errorResponse
        );
        setIsOpen(true);
      } else {
        setAllertMessage(data.data);
        setIsOpen(true);
        setTimeout(() => {
          navigate(`/verify?email=${formData.email}`);
        }, 2000);
      }
    }

    // if (chekValidation()) {
    //   //  Form submission here
    //   alert(123);
    // }
  };

  const handleClose = () => {
    setIsOpen(false);
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
        <div className="block space-y-5 p-4 bg-gray-100 w-[100vw] md:w-[60vw] xl:w-[28vw] mx-auto rounded-md shadow h-auto">
          <h2 className="">Register</h2>

          <BaseInput
            name="name"
            type="text"
            label="Name"
            handleChange={handleInputChange}
            style={`${
              errMessage.name && "focus:border-red-400 border-red-400"
            }`}
          />
          {errMessage.name && (
            <p className="!mt-0 text-red-500 ">{errMessage.name}</p>
          )}

          <BaseInput
            label="Email"
            name="email"
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

          <BaseInput
            label="Confirm Password"
            name="confirm_password"
            handleChange={handleInputChange}
            style={`${
              errMessage.confirm_password &&
              "focus:border-red-400 border-red-400"
            }`}
          />
          {errMessage.confirm_password && (
            <p className="!mt-0 text-red-500 ">{errMessage.confirm_password}</p>
          )}
          <div className="flex justify-between !mt-5 items-center">
            <button
              onClick={handleSubmit}
              className="p-2 px-4 text-white bg-blue-600 rounded"
            >
              Register
            </button>
            <p>
              Already have an account.{" "}
              <Link to={"/login"} style={{ color: "blue", fontWeight: "bold" }}>
                Login
              </Link>{" "}
              here
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
