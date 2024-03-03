import { useData } from "contextApi/DataContext";
import { useFileUpload, useInputHelper } from "helpers/FormHandler";
import React, { useRef } from "react";

import BaseInput from "utils/Forms/BaseInput";
import BaseTextArea from "utils/Forms/BaseTextArea";
import BaseModal from "utils/Modal/BaseModal";

type Props = {};

const About = (props: Props) => {
  const modalRef = useRef<any>();
  const hanleInput = useInputHelper();
  const handleModal = () => {
    modalRef.current.toggleModal();
  };
  const handleFileUpload = useFileUpload();

  const formData = useData();

  console.log(formData);

  return (
    <>
      <BaseModal title="Upload photo" ref={modalRef}>
        <div className="flex items-center justify-center h-24 border border-blue-600 border-dashed">
          <div className="relative ">
            <input
              type="file"
              id="file"
              name="file"
              className="absolute hidden w-full"
              onChange={handleFileUpload}
            />
            {!formData.photo ? (
              <label htmlFor="file" className="w-full cursor-pointer ">
                Upload Photo
              </label>
            ) : (
              <div className="flex items-center justify-center gap-x-2">
                <img
                  width={50}
                  height={50}
                  src={URL.createObjectURL(formData.photo)}
                  alt="img"
                  className="p-1 border border-gray-400 rounded shadow-sm"
                />
                <div className="text-2xl font-semibold text-gray-600">X</div>
              </div>
            )}
          </div>
        </div>
      </BaseModal>

      <button
        onClick={handleModal}
        type="button"
        className="p-2 mt-5 text-white bg-blue-600"
      >
        Image upload
      </button>
      <div className="flex flex-wrap justify-between w-full gap-4">
        <div className="w-[48%]">
          <BaseInput handleChange={hanleInput} name="name" label="Name" />
        </div>
        <div className="w-[48%]">
          <BaseInput handleChange={hanleInput} name="surName" label="Surname" />
        </div>
        <div className="w-[50%]">
          <BaseTextArea
            handleChange={hanleInput}
            name="title"
            placeHolder="E.g. Your position"
          />
        </div>
      </div>
    </>
  );
};

export default About;
