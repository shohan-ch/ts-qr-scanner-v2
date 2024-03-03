import { useData } from "contextApi/DataContext";
import {
  useDeleteHeleper,
  useFileUploadHeleper,
  useInputHelper,
} from "helpers/FormHandler";
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
  const handleFileUpload = useFileUploadHeleper();

  const handleDelete = useDeleteHeleper();

  const formData = useData();

  return (
    <>
      <BaseModal title="Upload photo" ref={modalRef}>
        <div className="flex items-center justify-center h-24 border border-blue-600 border-dashed">
          <div className="relative w-full h-full">
            <input
              type="file"
              id="file"
              name="file"
              className="absolute hidden w-full"
              onChange={handleFileUpload}
            />
            {!formData.photo ? (
              <label
                htmlFor="file"
                className="absolute flex items-center justify-center w-full h-full cursor-pointer "
              >
                Upload Photo
              </label>
            ) : (
              <div className="absolute flex items-center justify-center w-full h-full gap-x-2">
                <img
                  width={50}
                  height={50}
                  src={URL.createObjectURL(formData.photo)}
                  alt="img"
                  className="p-1 border border-gray-400 rounded shadow-sm"
                />
                <div
                  className="text-2xl font-semibold text-gray-600 cursor-pointer"
                  onClick={() => handleDelete("photo")}
                >
                  X
                </div>
              </div>
            )}
          </div>
        </div>
      </BaseModal>

      <button
        onClick={handleModal}
        type="button"
        className="p-2 my-4 ml-1 text-black rounded-full shadow-lg ring-blue-600 ring"
      >
        Image upload <span className="font-semibold text-blue-600 ">+</span>
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
