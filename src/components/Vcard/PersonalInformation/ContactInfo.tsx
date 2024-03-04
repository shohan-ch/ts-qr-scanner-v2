import React from "react";
import BaseMultipleSelect from "utils/Forms/BaseMultipleSelect";

type Props = {};

const ContactInfo = (props: Props) => {
  const telephoneOptions = [
    {
      name: "type",
      type: "text",
      placeHolder: "Write type",
    },
    {
      name: "label",
      type: "text",
      placeHolder: "Label...",
    },
    {
      name: "mobile",
      type: "password",
      placeHolder: "Eg.0000 000",
    },
  ];

  const emailOptions = [
    {
      name: "type",
      type: "text",
      placeHolder: "Write type",
    },
    {
      name: "label",
      type: "text",
      placeHolder: "Label...",
    },
    {
      name: "mobile",
      type: "password",
      placeHolder: "Eg.0000 000",
    },
  ];

  const websiteOptions = [
    {
      name: "type",
      type: "text",
      placeHolder: "Write type",
    },
    {
      name: "label",
      type: "text",
      placeHolder: "Label...",
    },
    {
      name: "mobile",
      type: "password",
      placeHolder: "Eg.0000 000",
    },
  ];

  return (
    <div>
      <h3 className="my-3">Telephone</h3>
      <BaseMultipleSelect fields={telephoneOptions} title="telephone" />
      <BaseMultipleSelect fields={emailOptions} title="email" />
      <BaseMultipleSelect fields={websiteOptions} title="website" />
    </div>
  );
};

export default ContactInfo;
