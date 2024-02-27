import { Dispatch, FC, SetStateAction } from "react";

interface SelectedStep {
  selectedStep: number;
  numOfSteps: number;
  stepperTitle?: string[];
  setSelectedStep: Dispatch<SetStateAction<number>>;
}
const BreadcrumbStepper: FC<SelectedStep> = ({
  selectedStep,
  numOfSteps,
  stepperTitle,
  setSelectedStep,
}) => {
  const list = [];

  for (let i = 1; i <= numOfSteps; i++) {
    list.push(
      <li
        onClick={() => setSelectedStep(i)}
        className={` ${
          selectedStep >= i ? "text-blue-600" : ""
        } flex items-center cursor-pointer`}
      >
        <span
          className={`${
            selectedStep >= i ? "border-blue-600" : ""
          } flex items-center justify-center w-5 h-5 text-xs border  rounded-full me-2 shrink-0`}
        >
          {i}
        </span>
        {stepperTitle![i - 1]}

        {i != numOfSteps && (
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        )}
      </li>
    );
  }

  return (
    <>
      <ol className="flex items-center w-full mx-auto lg:w-[40%] p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-700 rounded-lg shadow-sm dark:text-gray-400 sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        {list}
      </ol>
    </>
  );
};

export default BreadcrumbStepper;
