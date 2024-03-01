import Collapse from "utils/Ui/Collapse";
import About from "./About";
import React from "react";

const PersonalInformation = () => {
  const collapseComponents = [
    {
      title: "About you",
      component: <About />,
    },
  ];

  return (
    <>
      <Collapse
        option={{
          title: "Basic Information",
          subtitle: "Add essential information",
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

export default PersonalInformation;
