import Stepper from "../../utils/Stepper/Stepper";
import ArticleIndex from "../Article/ArticleIndex";
import VcardIndex from "./VcardIndex";

const VcardStepper = () => {
  const stepperComponents = [
    {
      step: 1,
      component: <VcardIndex />,
    },
    {
      step: 2,
      component: <ArticleIndex />,
    },
  ];

  return (
    <>
      <Stepper components={stepperComponents} />
    </>
  );
};

export default VcardStepper;
