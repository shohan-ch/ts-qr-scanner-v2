import React from "react";
import BaseLabelRadio from "utils/Forms/BaseLabelRadio";

type Props = {};

const LocationInfo = (props: Props) => {
  return (
    <div>
      {/* Location button */}

      <div className="flex gap-x-2">
        <BaseLabelRadio
          name="complete"
          label="Complete"
          handleChange={(e) => console.log(e.target.value)}
          categoryName="location"
        />

        <BaseLabelRadio
          name="url"
          label="Url"
          handleChange={(e) => console.log(e.target.value)}
          categoryName="location"
        />
        {/* <div className="buton">
          <input
            type="radio"
            id="complete"
            value={"complete"}
            className="appearance-none peer"
            name="locationButtom"
          />
          <label
            htmlFor="complete"
            className="flex items-center justify-center w-24 border h-14 peer-checked:borde peer-checked:border-red-600"
          >
            Complete
          </label>
        </div>

        <div className="buton">
          <input
            type="radio"
            id="url"
            value={"url"}
            className="appearance-none peer"
            name="locationButtom"
          />
          <label
            htmlFor="url"
            className="flex items-center justify-center w-24 border h-14 peer-checked:borde peer-checked:border-red-600"
          >
            Url
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default LocationInfo;
