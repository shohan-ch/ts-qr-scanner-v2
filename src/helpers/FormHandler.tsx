import { useDispatchData } from "contextApi/DataContext";
import React from "react";

export const useInputHelper = () => {
  const formDispatch = useDispatchData();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
