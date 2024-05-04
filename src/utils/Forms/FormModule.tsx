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

type ApiMethod =
  | "getRequest"
  | "postRequest"
  | "postFormRequest"
  | "patchRequest"
  | "deleteRequest";

type ApiType = {
  method: ApiMethod;
  url: string;
};

type Props = {
  formData: object;
  apiEndPoint: string | ApiType;
  validationRule: object;
  redirectRoute?: string;
};
const FormModule = (props: Props, ref: any) => {
  const { formData, apiEndPoint, validationRule, redirectRoute } = props;
  const api = useApi();
  const [isOpen, setIsOpen] = useState(false);
  const [allertMessage, setAllertMessage] = useState("");
  const [allertType, setAllertType] = useState("error");
  const navigate = useNavigate();
  //   const [searchParams] = useSearchParams();
  //   const email = searchParams.get("email");

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
    if (isValidate === true) {
      return true;
    } else {
      return isValidate;
    }
  };

  const apiOptions = () => {
    let method: ApiMethod;
    let url: string;

    if (typeof apiEndPoint === "string") {
      method = "getRequest"; // Default method if endpoint is a string
      url = apiEndPoint;
    } else {
      method = apiEndPoint.method; // Asserting the type
      url = apiEndPoint.url;
    }

    return {
      method,
      url,
    };
  };

  const handleSubmit = async () => {
    let isValidationSuccess = validationOfBase();
    if (isValidationSuccess === true) {
      // Api call

      const { url, method } = apiOptions();
      const { data: responseData, error } = await api[method](
        url,
        formData || {}
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
        if (redirectRoute) {
          setTimeout(() => {
            navigate(`${redirectRoute}`);
          }, 3000);
        }
      }
    } else {
      return isValidationSuccess;
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
