import { useInputHelper } from "helpers/FormHandler";
import { useRef } from "react";
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
  return (
    <>
      <BaseModal ref={modalRef}>
        <p>Lorem ipsum dolor sit amet.</p>
        <p className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel debitis
          porro minus reprehenderit enim non quidem, inventore aperiam quo quae
          explicabo eius vero. Cum recusandae rem blanditiis veniam possimus
          quas fuga, tempora, nemo consequuntur non quidem quis inventore
          aliquam? Minus error id consequuntur, sint deserunt voluptatem
          aperiam. Molestias, facilis iste!
        </p>
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
