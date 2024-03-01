import { useData, useDispatchData } from "contextApi/DataContext";
import BaseInput from "utils/Forms/BaseInput";
import templateList from "../../../data/templateList.json";
import { useInputHelper } from "helpers/FormHandler";
import Collapse from "utils/Ui/Collapse";

const VcardAppearence = () => {
  const data = useData();
  const handleInput = useInputHelper();
  console.log(data);

  return (
    <>
      <BaseInput
        name="qrTitle"
        handleChange={handleInput}
        placeHolder="Name of qr code"
        label="Name"
      />

      <Collapse
        option={{
          title: "Appearnce",
          subtitle: "Customize style",
        }}
      >
        <div className="relative flex my-12 gap-x-11">
          {templateList &&
            templateList.map((list, index) => (
              <div key={index}>
                <input
                  className="sr-only peer"
                  type="radio"
                  id={list.name}
                  name="template"
                  value={list.name}
                  onChange={handleInput}
                />
                <label
                  className="block p-4 border-2 cursor-pointer w-[200px] peer-checked:border-red-500"
                  htmlFor={list.name}
                >
                  <div className="bg-white rounded-lg shadow-lg">
                    <img
                      src={list.image}
                      alt={list.name}
                      className="w-full rounded-t-lg"
                    />
                    <div className="p-4">
                      <h2 className="mb-2 text-base text-center text-purple-800">
                        {list.name}
                      </h2>
                    </div>
                  </div>
                </label>
              </div>
            ))}
        </div>
      </Collapse>
    </>
  );
};

export default VcardAppearence;
