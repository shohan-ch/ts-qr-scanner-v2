import React, { useState } from "react";
import BaseLabelRadio from "utils/Forms/BaseLabelRadio";
import CompleteLocation from "./CompleteLocation";
import UrlLocation from "./UrlLocation";

type Props = {};

const LocationIndex = (props: Props) => {
  const [locationButton, setLocationButton] = useState("");

  const handleSelectButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationButton(e.target.value);
  };

  console.log(locationButton);

  return (
    <div>
      {/* Location button */}
      <div className="flex w-full gap-x-2">
        <div className="w-[50%]">
          <BaseLabelRadio
            name="url"
            label="Url"
            handleChange={handleSelectButton}
            categoryName="location"
          />
        </div>
        <div className="w-[50%]">
          <BaseLabelRadio
            name="complete"
            label="Complete"
            handleChange={handleSelectButton}
            categoryName="location"
          />
        </div>
      </div>

      {/* Location Address */}
      {locationButton == "complete" ? <CompleteLocation /> : <UrlLocation />}
    </div>
  );
};

export default LocationIndex;
