import useApi from "api/useApi";
import ValidationBase from "helpers/ValidationBase";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AlertBar from "utils/Ui/AlertBar";

type Props = {
  formData: object;
  apiEndPoint: object | string;
  validationRule: object;
};
const FormModule = (props: Props, ref: any) => {
  const { formData, apiEndPoint, validationRule } = props;
  const api = useApi();
  const [errMessage, setErrMessage] = useState<any>({});
  const [isOpen, setIsOpen] = useState(false);
  const [allertMessage, setAllertMessage] = useState("");
  const [allertType, setAllertType] = useState("error");
  //   const [searchParams] = useSearchParams();
  //   const email = searchParams.get("email");
  //   const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
  };

  useImperativeHandle(ref, () => {
    return {
      handleSubmit,
    };
  });

  const validationOfBase = () => {
    let isValidate = ValidationBase(formData, validationRule);
    setErrMessage(isValidate);
    if (isValidate === true) {
      return true;
    } else {
      return isValidate;
      //   return errMessage;
    }
  };

  const handleSubmit = async () => {
    let isValidationSuccess = validationOfBase();
    if (isValidationSuccess === true) {
      // Api call
      const { data: responseData, error } = await api.postRequest(
        `${apiEndPoint}`,
        formData
      );
      if (error) {
        const { data: errorResponse } = error;
        setAllertMessage(
          (Array.isArray(errorResponse) && errorResponse[0]) || errorResponse
        );
        setIsOpen(true);
      } else {
        const { data } = responseData;
        if (typeof data === "string") {
          setAllertType("success");
          setAllertMessage(data);
          setIsOpen(true);
        } else {
          return { data: data };
        }
        // setTimeout(() => {
        //   navigate("/login");
        // }, 2000);
      }
    } else {
      return isValidationSuccess;
      //   return errMessage;
    }
  };

  return (
    <>
      <AlertBar
        open={isOpen}
        onClose={handleClose}
        type={allertType}
        message={allertMessage}
      />
    </>
  );
};

export default forwardRef(FormModule);
