import React, { ReactEventHandler, useState } from "react";
import Input from "../../utils/Forms/Input";
import { useData, useDispatchData } from "../../contextApi/DataContext";
import VcardAppearence from "./Appearence/Index";
const VcardIndex = () => {
  const data = useData();
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

  console.log(data);

  return (
    <>
      <div className="my-5">
        <h2>Complete the content of the QR</h2>
        <VcardAppearence />
      </div>
    </>
  );
};

export default VcardIndex;
