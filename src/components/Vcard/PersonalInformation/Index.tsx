import Collapse from "utils/Ui/Collapse";
import About from "./About";
import React from "react";
import ContactInfo from "./ContactInfo";
import LocationIndex from "./Location/LocationIndex";

const PersonalInformation = () => {
  const collapseComponents = [
    {
      title: "About you",
      component: <About />,
    },

    {
      title: "Contact info",
      component: <ContactInfo />,
    },
    {
      title: "Location",
      component: <LocationIndex />,
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
