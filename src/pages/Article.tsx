import ArticleIndex from "../components/Article/ArticleIndex";
import Stepper from "../utils/Stepper/Stepper";

const Article = () => {
  const stepperComponents = [
    {
      step: 1,
      component: <ArticleIndex />,
    },
    {
      step: 2,
      component: <>New page add</>,
    },
  ];
  return (
    <>
      <Stepper components={stepperComponents} />
    </>
  );
};

export default Article;
