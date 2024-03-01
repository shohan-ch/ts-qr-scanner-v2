import React, { ReactEventHandler, useState } from "react";
import Input from "../../utils/Forms/BaseTextArea";
import { useData, useDispatchData } from "../../contextApi/DataContext";
import VcardAppearence from "./Appearence/Index";
import PersonalInformation from "./PersonalInformation/Index";
const VcardIndex = () => {
  const data = useData();

  console.log(data, "from vcard index");

  return (
    <>
      <div className="my-5 ">
        <h2>Complete the content of the QR</h2>
        <div className="space-y-6">
          <VcardAppearence />
          <PersonalInformation />
        </div>
      </div>
    </>
  );
};

export default VcardIndex;
