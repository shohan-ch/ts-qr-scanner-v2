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
      name: "label",
      type: "text",
      placeHolder: "Label...",
    },
    {
      name: "email",
      type: "email",
      placeHolder: "Eg. name@email.com",
    },
  ];

  const websiteOptions = [
    {
      name: "title",
      type: "text",
      placeHolder: "Write here the text URL...",
    },
    {
      name: "website",
      type: "text",
      placeHolder: "https://",
    },
  ];

  return (
    <div>
      <h3 className="my-3">Telephone</h3>
      <BaseMultipleSelect fields={telephoneOptions} title="telephones" />
      <BaseMultipleSelect fields={emailOptions} title="emails" />
      <BaseMultipleSelect fields={websiteOptions} title="websites" />
    </div>
  );
};

export default ContactInfo;
