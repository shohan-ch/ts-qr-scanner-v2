import VcardIndex from "../components/Vcard/VcardIndex";
import Stepper from "../utils/Stepper/Stepper";
import Article from "./Article";
import Home from "./Home";

const stepperComponents = [
  {
    step: 1,
    component: <Home />,
  },

  {
    step: 2,
    component: <VcardIndex />,
  },
  {
    step: 3,
    component: <Article />,
  },
];

const Vcard = () => {
  return (
    <>
      <div className="mx-auto  max-w-7xl">
        <Stepper components={stepperComponents} />
      </div>
    </>
  );
};

export default Vcard;
