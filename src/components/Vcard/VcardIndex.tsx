import React, { ReactEventHandler, useState } from "react";
import Input from "../../utils/Forms/BaseInput";
import { useData, useDispatchData } from "../../contextApi/DataContext";
import VcardAppearence from "./Appearence/Index";
const VcardIndex = () => {
  const data = useData();

  console.log(data, "from vcard index");

  return (
    <>
      <div className="my-5 ">
        <h2>Complete the content of the QR</h2>
        <VcardAppearence />
      </div>
    </>
  );
};

export default VcardIndex;
