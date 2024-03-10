import { useData } from "contextApi/DataContext";
import { useInputHelper } from "helpers/FormHandler";
import React from "react";
import BaseInput from "utils/Forms/BaseInput";

type Props = {};

const UrlLocation = (props: Props) => {
  const data = useData();

  const handleInput = useInputHelper();

  console.log(data);
  return (
    <div className="mt-4">
      <BaseInput
        name="location"
        placeHolder="Url:..."
        handleChange={handleInput}
      />
    </div>
  );
};

export default UrlLocation;
