import { useData } from "contextApi/DataContext";
import {
  useMultipleDeleteHelper,
  useMultipleFileUploadHeleper,
} from "helpers/FormHandler";
import BaseFileUpload from "utils/Forms/BaseFileUpload";

type Props = {};

const CoverImages = (props: Props) => {
  const handleMultipleFileUpload = useMultipleFileUploadHeleper();
  const handleDelete = useMultipleDeleteHelper();
  const formData = useData();

  console.log(formData);
  return (
    <>
      <div className="my-4">
        <BaseFileUpload
          name="coverImages"
          labelTitle="Upload Photos"
          handleChange={handleMultipleFileUpload}
        />

        <div className="max-h-[500px] overflow-y-scroll">
          {formData.coverImages &&
            formData.coverImages.map((image: any, index: any) => (
              <div
                key={image.image.name}
                className="flex items-center justify-between h-24 px-3 my-4 border border-blue-600 border-dashed"
              >
                <div className="w-[80px] h-[80px] overflow-hidden border border-gray-400 p-2 flex items-center rounded-md ">
                  <img
                    alt="not found"
                    width={"80px"}
                    height={"70px"}
                    src={window.URL.createObjectURL(image.image)}
                  />
                </div>

                <div>
                  <button onClick={() => handleDelete("coverImages", index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CoverImages;
