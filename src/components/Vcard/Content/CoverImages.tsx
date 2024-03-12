import { useMultipleFileUploadHeleper } from "helpers/FormHandler";
import BaseFileUpload from "utils/Forms/BaseFileUpload";

type Props = {};

const CoverImages = (props: Props) => {
  const handleMultipleFileUpload = useMultipleFileUploadHeleper();
  return (
    <>
      <BaseFileUpload
        name="coverImages"
        labelTitle="Upload Photos"
        handleChange={handleMultipleFileUpload}
      />
    </>
  );
};

export default CoverImages;
