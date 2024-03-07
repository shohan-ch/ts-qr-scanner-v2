import React from "react";
import BaseInput from "utils/Forms/BaseInput";

type Props = {};

const UrlLocation = (props: Props) => {
  return (
    <div className="mt-4">
      <BaseInput
        name="url"
        placeHolder="Url:..."
        handleChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default UrlLocation;
