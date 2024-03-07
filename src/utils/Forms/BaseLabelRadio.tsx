import React from "react";

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  style?: string;
  categoryName: string;
};

const BaseLabelRadio = (props: Props) => {
  const { name, label, style, categoryName, handleChange } = props;
  return (
    <div>
      <input
        onChange={handleChange}
        type="radio"
        id={name}
        value={name}
        className="appearance-none peer"
        name={categoryName}
      />
      <label
        htmlFor={name}
        className={`${
          style && style
        } flex items-center justify-center cursor-pointer border p-5 peer-checked:border peer-checked:border-red-600`}
      >
        {label}
      </label>
    </div>
  );
};

export default BaseLabelRadio;
