import { useInputHelper } from "helpers/FormHandler";
import React from "react";
import BaseInput from "utils/Forms/BaseInput";

type Props = {};

const About = (props: Props) => {
  const hanleInput = useInputHelper();
  return (
    <div className="flex flex-wrap justify-between w-full gap-4">
      <div className="w-[48%]">
        <BaseInput handleChange={hanleInput} name="name" label="Name" />
      </div>
      <div className="w-[48%]">
        <BaseInput handleChange={hanleInput} name="surName" label="Surname" />
      </div>
    </div>
  );
};

export default About;