import React from "react";
interface InputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeHolder?: string;
  style?: string;
  type?: string;
  label?: string;
  value?: string | number;
}

const BaseInput: React.FC<InputProps> = (props) => {
  const { handleChange, name, placeHolder, style, type, label, value } = props;

  return (
    <>
      <div>
        {label && (
          <label
            htmlFor="first_name"
            className="block my-2 text-sm font-medium text-gray-900"
          >
            {label}
          </label>
        )}
        <input
          onChange={handleChange}
          type={type || "text"}
          name={name}
          value={value && value}
          placeholder={placeHolder}
          className={`${
            style && style
          } bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
        />
      </div>
    </>
  );
};

export default BaseInput;
