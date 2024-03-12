import { useInputHelper } from "helpers/FormHandler";
import BaseTextArea from "utils/Forms/BaseTextArea";

type Props = {};

const Summary = (props: Props) => {
  const handleInput = useInputHelper();

  return (
    <div className="my-5">
      <BaseTextArea
        name="summary"
        handleChange={handleInput}
        placeHolder="Write summary"
      />
    </div>
  );
};

export default Summary;
