import { useState } from "react";
import BaseInput from "./BaseInput";
import BaseTextArea from "./BaseTextArea";
import {
  useMultipleDeleteHelper,
  useMultipleInputHelper,
} from "helpers/FormHandler";
import { useData } from "contextApi/DataContext";

type ObjectType = {
  name: string;
  type: string;
  placeHolder?: string;
};

type Props = {
  title: string;
  fields: ObjectType[];
};

const BaseMultipleSelect = (props: Props) => {
  const { fields, title } = props;
  const [count, setCount] = useState(1);
  const [incrementNum, setIncrementNum] = useState([1]);
  const formData = useData();

  const multipleDelete = useMultipleDeleteHelper();
  const handleMultipleInput = useMultipleInputHelper();

  const handleIncrement = () => {
    setIncrementNum([...incrementNum, count + 1]);
    setCount(count + 1);
  };

  const handleDecrement = (index: number) => () => {
    multipleDelete(title, index);
    const decrement = incrementNum.filter((item) => item != index);
    setIncrementNum(decrement);
  };

  const selectInputFieldByType = (props: (typeof fields)[0], index: number) => {
    const { type, name, placeHolder } = props;
    if (type === "text" || type === "email" || type === "password") {
      return (
        <BaseInput
          type={type}
          name={name}
          placeHolder={placeHolder}
          handleChange={handleMultipleInput(title, index)}
        />
      );
    } else if (type === "textarea") {
      return (
        <BaseTextArea
          name={name}
          placeHolder={placeHolder}
          handleChange={handleMultipleInput(title, index)}
        />
      );
    } else {
      return "The form input not available for this type " + type;
    }
  };
  console.log(formData, "multi select");
  return (
    <>
      {incrementNum.map((num, index) => (
        <div key={num} className="flex gap-x-4">
          {fields.map((field, index) => (
            <div key={index}>
              <div>{selectInputFieldByType(field, num)}</div>
            </div>
          ))}

          <button onClick={handleDecrement(num)}>X {num}</button>
        </div>
      ))}
      <button
        onClick={handleIncrement}
        type="button"
        className="p-2 my-4 ml-1 text-black rounded-full shadow-lg ring-blue-600 ring"
      >
        Add {title}
      </button>
    </>
  );
};

export default BaseMultipleSelect;
