import React, { ReactEventHandler, useState } from "react";
import Input from "../../utils/Forms/Input";
import { useData, useDispatchData } from "../../contextApi/DataContext";
const VcardIndex = () => {
  // const [formData, setFormData] = useState<object | null>(null);
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
  // setFormData({ ...formData, [name]: value });

  return (
    <>
      <div className="my-5">
        <h2>Complete the content of the QR</h2>

        <Input
          name="qrcodeName"
          handleChange={handleInputChange}
          placeHolder="Name of qr code"
          style="border"
          label="Name"
        />
      </div>
    </>
  );
};

export default VcardIndex;
