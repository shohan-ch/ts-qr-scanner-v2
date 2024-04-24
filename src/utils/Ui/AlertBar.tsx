import React, { useEffect, useState } from "react";

const icons = {
  success: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#18aa4c"
      fill="none"
    >
      <path
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M8 12.5L10.5 15L16 9"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  error: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#d41515"
      fill="none"
    >
      <path
        d="M5.32171 9.6829C7.73539 5.41196 8.94222 3.27648 10.5983 2.72678C11.5093 2.42437 12.4907 2.42437 13.4017 2.72678C15.0578 3.27648 16.2646 5.41196 18.6783 9.6829C21.092 13.9538 22.2988 16.0893 21.9368 17.8293C21.7376 18.7866 21.2469 19.6548 20.535 20.3097C19.241 21.5 16.8274 21.5 12 21.5C7.17265 21.5 4.75897 21.5 3.46496 20.3097C2.75308 19.6548 2.26239 18.7866 2.06322 17.8293C1.70119 16.0893 2.90803 13.9538 5.32171 9.6829Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M12.2422 17V13C12.2422 12.5286 12.2422 12.2929 12.0957 12.1464C11.9493 12 11.7136 12 11.2422 12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.992 8.99997H12.001"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  close: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#000000"
      fill="none"
    >
      <path
        d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};

type Props = {
  open: boolean;
  message: string;
  onClose: () => void;
  autoHideDuration?: number;
  type?: string;
};

const AlertBar = (props: Props) => {
  const { message, onClose, open, autoHideDuration, type } = props;
  useEffect(() => {
    let timer: any;
    timer = setTimeout(() => {
      onClose && onClose();
    }, autoHideDuration || 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [open]);

  return (
    <>
      {open && (
        <div className="transition-all shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] duration-300 rounded-lg  z-50 flex justify-between bg-white  absolute right-0 p-5 min-w-[18vw] h-auto">
          <span className="inline-block">
            {(type == "error" && icons["error"]) || icons["success"]}
          </span>
          <p>{message}</p>

          {onClose && (
            <span className="cursor-pointer" onClick={onClose}>
              {icons["close"]}
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default AlertBar;
