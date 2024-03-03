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
export const useFileUploadHeleper = () => {
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

export const useDeleteHeleper = () => {
  const formDispatch = useDispatchData();

  const handleDelete = (name: string) => {
    formDispatch({
      type: "DELETE",
      payload: {
        name: name,
      },
    });
  };

  return handleDelete;
};

export const useMultipleInputHelper = () => {
  const formDispatch = useDispatchData();

  const handleMultipleInput =
    (category: string, index: number) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      formDispatch({
        type: "ADD_MULTIPLE",
        payload: {
          category: category,
          index: index,
          name: name,
          value: value,
        },
      });
    };

  return handleMultipleInput;
};
