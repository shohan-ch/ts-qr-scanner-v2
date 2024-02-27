import React, { FC, useEffect, useState } from "react";
import BreadcrumbStepper from "./Design/BreadcrumbStepper";

interface Components {
  step: number;
  component: React.ReactNode;
}

interface ComponentProps {
  components: Components[];
}

const Stepper: FC<ComponentProps> = ({ components }) => {
  const NUM_OF_STEPS = components.length;
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
      let renderComponent = components.find(
        (component: any) => component.step == selectedStep
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
