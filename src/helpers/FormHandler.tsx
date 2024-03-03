import { useDispatchData } from "contextApi/DataContext";
import React from "react";

export const useInputHelper = () => {
  const formDispatch = useDispatchData();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    formDispatch({
      type: "ADD",
      payload: {
        name: name,
        value: value,
      },
    });
  };

  return handleInputChange;
};
export const useFileUpload = () => {
  const formDispatch = useDispatchData();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      formDispatch({
        type: "ADD",
        payload: {
          name: "photo",
          value: files[0],
        },
      });
    }
  };

  return handleFileChange;
};
