import React from "react";
import Companies from "./Companies";
import Collapse from "utils/Ui/Collapse";
import Summary from "./Summary";

type Props = {};

const collapseComponents = [
  {
    title: "Companies",
    component: <Companies />,
  },

  {
    title: "Summary",
    component: <Summary />,
  },
];

const Contentindex = (props: Props) => {
  return (
    <div>
      <Collapse
        option={{
          title: "Content",
          subtitle: "All the details about your qr",
        }}
      >
        {collapseComponents.map((item, index) => (
          <React.Fragment key={index}>
            <Collapse option={{ title: item.title }}>{item.component}</Collapse>
          </React.Fragment>
        ))}
      </Collapse>
    </div>
  );
};

export default Contentindex;
