import { FC, ReactNode, useState } from "react";

const ROTATE_OPTION = {
  LEFT: "90",
  RIGHT: "180",
};

const Icons = {
  apearence: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="currentColor"
      className="bi bi-badge-ad"
      viewBox="0 0 16 16"
    >
      <path d="m3.7 11 .47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11zm1.503-4.852.734 2.426H4.416l.734-2.426zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z" />
      <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
    </svg>
  ),
  rightArrow: (isVisible: boolean) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="currentColor"
      className={`transition-all duration-500 bi bi-arrow-right-short ${
        isVisible && "rotate-" + ROTATE_OPTION.LEFT
      }`}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
      />
    </svg>
  ),
};

interface CollapseProps {
  children: ReactNode;
  option: {
    title: string;
    subtitle?: string;
    iconName?: string;
  };
}
const Collapse: FC<CollapseProps> = (props) => {
  const {
    children,
    option: { title, subtitle, iconName },
  } = props;

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleCollapse = () => {
    setIsVisible(!isVisible);
  };

  const headerOfSubtitle = (
    <>
      <div className="flex items-center gap-x-4">
        {iconName || Icons["apearence"]}
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="mt-2 text-xs text-gray-700">{subtitle}</p>
        </div>
      </div>
      <div className="p-1 rounded-full shadow bg-gray-50 ">
        {Icons.rightArrow(isVisible)}
      </div>
    </>
  );

  const headerWithoutSubtitle = (
    <>
      <div className="flex items-center gap-x-4 ">
        <div className="p-1 rounded-full shadow bg-gray-50 ">
          {Icons.rightArrow(isVisible)}
        </div>
        <div>
          <p className="text-sm">{title}</p>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className={`${!isVisible && "border-b"}  border-gray-200 `}>
        <div
          className={`flex items-center py-2 cursor-pointer   ${
            subtitle && "justify-between"
          }`}
          onClick={handleCollapse}
        >
          {subtitle ? headerOfSubtitle : headerWithoutSubtitle}
        </div>
        {/* Render children */}
        <div
          className={`overflow-hidden py-1 transition-all duration-500  ${
            isVisible ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Collapse;
