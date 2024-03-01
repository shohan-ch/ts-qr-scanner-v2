import { useData } from "contextApi/DataContext";
import { useInputHelper } from "helpers/FormHandler";
import React from "react";
import BaseInput from "utils/Forms/BaseInput";
import Collapse from "utils/Ui/Collapse";
import ColorPicker from "./ColorPicker";
import TemplateList from "./TemplateList";

const VcardAppearence = () => {
  const data = useData();
  const handleInput = useInputHelper();
  // console.log(data);

  const collapseComponents = [
    {
      title: "Select template",
      component: <TemplateList />,
    },

    {
      title: "Design",
      component: <ColorPicker />,
    },
  ];

  return (
    <>
      <BaseInput
        name="qrTitle"
        handleChange={handleInput}
        placeHolder="Name of qr code"
        label="Name"
      />

      <Collapse
        option={{
          title: "Appearnce",
          subtitle: "Customize style",
        }}
      >
        {collapseComponents.map((item, index) => (
          <React.Fragment key={index}>
            <Collapse option={{ title: item.title }}>{item.component}</Collapse>
          </React.Fragment>
        ))}
      </Collapse>
    </>
  );
};

export default VcardAppearence;
