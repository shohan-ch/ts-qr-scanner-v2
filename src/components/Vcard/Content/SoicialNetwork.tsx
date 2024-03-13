import React, { useState } from "react";
import SocialsData from "../../../data/socialNetwork.json";
import BaseInput from "utils/Forms/BaseInput";
import { useInputHelper, useMultipleInputHelper } from "helpers/FormHandler";
import { useDispatchData } from "contextApi/DataContext";

type Props = {};

const SoicialNetwork = (props: Props) => {
  const [socialContainer, setSocialContainer] = useState<any[] | any>([]);
  const handleAddTitle = useInputHelper();
  const formDispatch = useDispatchData();

  const handleSocialContainerAdd =
    (social: (typeof socialContainer)[0]) => () => {
      setSocialContainer((prev: any[]) => {
        return prev.some((item) => social.name == item.name)
          ? prev
          : [...prev, social];
      });
    };

  const handleSocialInputAdd =
    (socialName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      formDispatch({
        type: "ADD_SOCIAL",
        payload: {
          socialName,
          name,
          value,
        },
      });
    };

  const handleSocialDelete = (name: string) => () => {
    setSocialContainer(
      socialContainer.filter((social: any) => social.name !== name)
    );

    formDispatch({
      type: "DELETE_SOCIAL",
      payload: {
        socialName: name,
      },
    });
  };

  return (
    <div className="my-4 max-h-[540px] overflow-y-auto">
      <h3> SoicialNetwork</h3>
      <BaseInput
        name="socialNetworkTitle"
        placeHolder="Title"
        style="mt-4 mb-6"
        handleChange={handleAddTitle}
      />
      {/*Social list */}
      {socialContainer.map((social: any, index: any) => (
        <div className="space-y-6 socialUrls" key={social.name}>
          <div className="flex items-center gap-x-5">
            <img src={social.logo} alt={social.name} width={30} />
            <p className="text-[16px]">{social.name}</p>
            <button
              className="ml-auto text-gray-600"
              onClick={handleSocialDelete(social.name)}
            >
              X
            </button>
          </div>

          <BaseInput
            name="url"
            placeHolder="Url"
            handleChange={handleSocialInputAdd(social.name)}
          />
          <BaseInput
            name="text"
            placeHolder="Text"
            handleChange={handleSocialInputAdd(social.name)}
          />
        </div>
      ))}
      {/* Add button   */}
      <div className="p-3 space-y-3 bg-gray-100 rounded-md shadow">
        <h4>Add</h4>
        <div className="flex gap-x-4">
          {SocialsData.map((social, index) => (
            <div
              onClick={handleSocialContainerAdd(social)}
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
