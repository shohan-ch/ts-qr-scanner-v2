import React from "react";
import BaseFileUpload from "utils/Forms/BaseFileUpload";

type Props = {};

const CoverImages = (props: Props) => {
  return (
    <>
      <BaseFileUpload
        labelTitle="Upload Photo"
        handleChange={() => console.log(1)}
      />
    </>
  );
};

export default CoverImages;
