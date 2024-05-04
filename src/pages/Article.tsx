import React, { createRef } from "react";
import BaseInput from "utils/Forms/BaseInput";
import FormModule from "utils/Forms/FormModule";

const Article = () => {
  const [formData, setFormData] = React.useState<any>({});
  const [errMessage, setErrMessage] = React.useState<any>({});
  const submitRef: any = createRef();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    files && setFormData({ ...formData, image: files[0] });
  };

  const handleSubmit = async () => {
    let response = await submitRef.current.handleSubmit();
    if (response === undefined) {
      setFormData({ title: "", text: "" });
    } else {
      const { data } = response;
      if (data) {
        setErrMessage({});
      } else {
        setErrMessage(response);
      }
    }
  };

  return (
    <>
      <div>
        <FormModule
          ref={submitRef}
          apiEndPoint={{ method: "postFormRequest", url: "/posts" }}
          formData={formData}
          validationRule={{
            title: "required",
            text: "required",
            image: "required",
          }}
        />

        <div className="flex items-center h-screen wrapper">
          <div className="space-y-5 p-4 bg-gray-100 w-[100vw] md:w-[60vw] xl:w-[28vw] mx-auto rounded-md shadow h-auto">
            <h2 className="">Article</h2>
            <BaseInput
              name="title"
              type="text"
              label="Title"
              value={formData.title}
              handleChange={handleInputChange}
              style={`${
                errMessage.title && "focus:border-red-400 border-red-400"
              }`}
            />
            {errMessage.title && (
              <p className="!mt-0 text-red-500 ">{errMessage.title}</p>
            )}
            <BaseInput
              label="Text"
              name="text"
              handleChange={handleInputChange}
              value={formData.text}
              style={`${
                errMessage.text && "focus:border-red-400 border-red-400"
              }`}
            />
            {errMessage.text && (
              <p className="!mt-0 text-red-500 ">{errMessage.text}</p>
            )}

            <BaseInput
              label="Image"
              type="file"
              name="image"
              handleChange={handleFileChange}
              style={`${
                errMessage.image && "focus:border-red-400 border-red-400"
              }`}
            />
            {errMessage.image && (
              <p className="!mt-0 text-red-500 ">{errMessage.image}</p>
            )}

            <div className="flex items-center justify-between">
              <button
                className="p-2 px-4 text-white bg-blue-600 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
