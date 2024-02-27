import React, { FC, useEffect, useState } from "react";
import ArticleIndex from "../../components/Article/ArticleIndex";
import VcardIndex from "../../components/Vcard/VcardIndex";
import ProgressStepper from "./Design/ProgressStepper";
import BreadcrumbStepper from "./Design/BreadcrumbStepper";

let StepperComponents = [
  {
    step: 1,
    component: <VcardIndex />,
  },
  {
    step: 2,
    component: <ArticleIndex />,
  },
  // {
  //   step: 3,
  //   component: <>Step 3</>,
  // },
  // {
  //   step: 4,
  //   component: <>Step 4</>,
  // },
];

const Stepper: FC = () => {
  const NUM_OF_STEPS = StepperComponents.length;
  const [selectedStep, setSelectedStep] = useState<any>(1);
  const [renderComponent, setRenderComponent] = useState<any>(null);

  const handleNextStep = () => {
    setSelectedStep((prev: number) =>
      NUM_OF_STEPS > selectedStep ? prev + 1 : prev
    );
  };

  const handlePreviousStep = () => {
    setSelectedStep((prev: number) => (prev <= 1 ? prev : prev - 1));
  };

  useEffect(() => {
    if (selectedStep) {
      let renderComponent = StepperComponents.find(
        (component) => component.step == selectedStep
      );
      setRenderComponent(renderComponent);
    }
  }, [selectedStep]);

  return (
    <>
      {/* Stepper  design */}

      {/* <ProgressStepper selectedStep={selectedStep} numOfSteps={NUM_OF_STEPS} /> */}
      <BreadcrumbStepper
        selectedStep={selectedStep}
        numOfSteps={NUM_OF_STEPS}
        stepperTitle={["Personal", "Account", "Success"]}
        setSelectedStep={setSelectedStep}
      />

      {/*  Render selected component by stepper */}
      {renderComponent?.component}

      {/* Button */}
      <div>
        <button
          onClick={handleNextStep}
          className={` bg-blue-700 px-6 py-2 ml-2 text-white  rounded-md`}
        >
          Next
        </button>
        <button
          onClick={handlePreviousStep}
          className={` bg-blue-700 px-6 py-2 ml-2 text-white  rounded-md`}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default Stepper;
