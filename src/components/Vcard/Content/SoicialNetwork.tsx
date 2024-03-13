import React, { useState } from "react";
import SocialsData from "../../../data/socialNetwork.json";
import BaseInput from "utils/Forms/BaseInput";
import { useInputHelper } from "helpers/FormHandler";

type Props = {};

const SoicialNetwork = (props: Props) => {
  const [socialContainer, setSocialContainer] = useState<any[]>([]);
  const handleAddTitle = useInputHelper();

  const handleSocialContainerAdd = (name: string) => () => {};

  console.log(socialContainer);

  return (
    <div className="my-4">
      <h3> SoicialNetwork</h3>
      <BaseInput
        name="socialNetworkTitle"
        placeHolder="Title"
        style="my-3"
        handleChange={handleAddTitle}
      />

      <div className="p-3 space-y-3 bg-gray-100 rounded-md shadow">
        <h4>Add</h4>
        <div className="flex gap-x-4">
          {SocialsData.map((social, index) => (
            <div
              onClick={handleSocialContainerAdd(social.name)}
              key={index}
              className="p-1 border-2 border-gray-400 rounded cursor-pointer "
            >
              <img
                width={30}
                src={social.logo}
                alt={social.name}
                title={social.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoicialNetwork;
