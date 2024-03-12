import React from "react";

type Props = {
  labelTitle: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: string;
};

const BaseFileUpload = (props: Props) => {
  const { labelTitle, handleChange, style } = props;
  return (
    <div className="flex items-center justify-center h-24 border border-blue-600 border-dashed">
      <div className="relative w-full h-full">
        <input
          type="file"
          id="file"
          name="file"
          className="absolute hidden w-full"
        />
        <label
          htmlFor="file"
          className="absolute flex items-center justify-center w-full h-full cursor-pointer "
        >
          {labelTitle && labelTitle}
        </label>
      </div>
    </div>
  );
};

export default BaseFileUpload;
