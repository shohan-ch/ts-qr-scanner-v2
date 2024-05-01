import { FC } from "react";
import { NavLink } from "react-router-dom";

type QrCodeTypeList = {
  title: string;
  subtitle: string;
  link: string;
};

const lists: QrCodeTypeList[] = [
  {
    title: "Website",
    subtitle: "Open a URL",
    link: "/",
  },
  {
    title: "vCard Plus",
    subtitle: "Share contact details",
    link: "/vcard",
  },
];

const HomeIndex: FC = () => {
  return (
    <>
      <section className="px-5 mb-5 space-y-4">
        <h2 className="mt-4 text-lg font-semibold">QR code genrator</h2>
        <div className="flex justify-between mb-5 gap-x-4">
          {lists.map((list, index) => (
            <NavLink
              key={index}
              to={list.link}
              className={({ isActive }) =>
                (isActive ? "active" : "") + " w-[50vw]"
              }
            >
              <div
                key={index}
                className="p-3 space-y-3 bg-red-200 rounded-md shadow-md cursor-pointer "
              >
                <h3>{list.title}</h3>
                <p>{list.subtitle}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeIndex;
