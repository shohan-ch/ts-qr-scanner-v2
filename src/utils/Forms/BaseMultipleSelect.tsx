import { useState } from "react";
import BaseInput from "./BaseInput";
import BaseTextArea from "./BaseTextArea";
import { useMultipleInputHelper } from "helpers/FormHandler";

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

  const handleMultipleInput = useMultipleInputHelper();

  const handleIncrement = () => {
    setIncrementNum([...incrementNum, count + 1]);
    setCount(count + 1);
  };

  const handleDecrement = (index: number) => () => {
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
          handleChange={handleMultipleInput("email", index)}
        />
      );
    } else if (type === "textarea") {
      return (
        <BaseTextArea
          name={name}
          placeHolder={placeHolder}
          handleChange={handleMultipleInput("email", index)}
        />
      );
    } else {
      return "The form input not available for this type " + type;
    }
  };

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
