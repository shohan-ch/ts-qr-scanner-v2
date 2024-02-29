import { useData, useDispatchData } from "contextApi/DataContext";
import Input from "utils/Forms/Input";
import templateList from "../../../data/templateList.json";

const VcardAppearence = () => {
  const data = useData();
  const formDispatch = useDispatchData();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formDispatch({
      type: "ADD",
      payload: {
        name: name,
        value: value,
      },
    });
  };

  return (
    <>
      <Input
        name="qrTitle"
        handleChange={handleInputChange}
        placeHolder="Name of qr code"
        label="Name"
      />

      <div className="relative flex my-12 gap-x-11">
        {templateList &&
          templateList.map((list, index) => (
            <>
              <div key={index}>
                <input
                  className="sr-only peer"
                  type="radio"
                  id={list.name}
                  name="template"
                  value={list.name}
                  onChange={handleInputChange}
                />
                <label
                  className="block p-4 border-2 cursor-pointer w-[25vw] peer-checked:border-red-500"
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
            </>
          ))}
      </div>
      {/* 
      {templateList.map((list, index) => (
        <>{list.name}</>
      ))} */}

      {/* <div className="relative flex gap-2">
        <div>
          <input
            className="sr-only peer"
            type="radio"
            id="template1"
            name="template"
            value="template1"
          />
          <label
            htmlFor="template1"
            className="p-5 border size-10 peer-checked:border peer-checked:border-red-400 "
          >
            Yes
          </label>
        </div>

        <div>
          <input
            className="sr-only peer"
            type="radio"
            id="template2"
            name="template"
            value="template1"
          />
          <label
            htmlFor="template2"
            className="p-5 border size-10 peer-checked:border peer-checked:border-red-400 "
          >
            No
          </label>
        </div>
      </div> */}
    </>
  );
};

export default VcardAppearence;
