import React from "react";
interface InputProps {
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  placeHolder?: string;
  style?: string;
  label?: string;
}

const BaseTextArea: React.FC<InputProps> = (props) => {
  const { handleChange, name, placeHolder, style, label } = props;

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

        <textarea
          onChange={handleChange}
          rows={4}
          name={name}
          className={`
          ${style && style}
          block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500`}
          placeholder={placeHolder}
        ></textarea>
      </div>
    </>
  );
};

export default BaseTextArea;
