import { useData } from "contextApi/DataContext";
import {
  useMultipleDeleteHelper,
  useMultipleInputHelper,
} from "helpers/FormHandler";
import { useState } from "react";
import BaseInput from "./BaseInput";
import BaseTextArea from "./BaseTextArea";

type ObjectType = {
  name: string;
  type: string;
  placeHolder?: string;
};

type Props = {
  title: string;
  fields: ObjectType[];
  style?: string;
};

const BaseMultipleSelect = (props: Props) => {
  const { fields, title, style } = props;
  const [count, setCount] = useState(1);
  const [incrementNum, setIncrementNum] = useState([1]);

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

  const selectInputFieldByType = (props: (typeof fields)[0], id: number) => {
    const { type, name, placeHolder } = props;
    if (type === "text" || type === "email" || type === "password") {
      return (
        <BaseInput
          type={type}
          name={name}
          placeHolder={placeHolder}
          handleChange={handleMultipleInput(title, id)}
        />
      );
    } else if (type === "textarea") {
      return (
        <BaseTextArea
          name={name}
          placeHolder={placeHolder}
          handleChange={handleMultipleInput(title, id)}
        />
      );
    } else {
      return "The form input not available for this type " + type;
    }
  };
  return (
    <>
      {incrementNum.map((num, index) => (
        <div key={num} className="flex w-full gap-x-4">
          {fields.map((field, index) => (
            <div key={index} className={style && style}>
              <div>{selectInputFieldByType(field, num)}</div>
            </div>
          ))}

          <button onClick={handleDecrement(num)}>X</button>
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
