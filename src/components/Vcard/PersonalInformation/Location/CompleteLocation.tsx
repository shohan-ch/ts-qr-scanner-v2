import React, { useEffect, useState } from "react";
import BaseInput from "utils/Forms/BaseInput";
import LocationData from "../../../../data/LocationData.json";
import {
  useDeleteHeleper,
  useInputHelper,
  useLocationInputHelper,
} from "helpers/FormHandler";
import { useData } from "contextApi/DataContext";

type Props = {};

const CompleteLocation = (props: Props) => {
  const [locations, setLocations] = useState<any[]>([]);
  const [suggestLocation, setSuggestLocation] = useState<object | any>({});
  const [isTyping, setIsTyping] = useState(true);

  const handleInput = useLocationInputHelper();
  const handleDelete = useDeleteHeleper();

  useEffect(() => {
    setIsTyping(false);
  }, [locations]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterdLocation = LocationData.filter((location) =>
      location.street.match(e.target.value)
    );
    setLocations(filterdLocation);
  };

  const handleSuggestLocation = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const suggestLocation = locations.find(
      (location) => location.street == e.currentTarget.value
    );

    handleInput(suggestLocation);
    setSuggestLocation(suggestLocation);

    setLocations([]);
  };

  const handleLoctionInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(true);
    const { name, value } = e.target;
    handleInput(value, name);
  };

  const handleLocationDelete = () => {
    setIsTyping(false);
    setSuggestLocation({});
    handleDelete("location");
  };

  return (
    <div className="mt-4">
      <div className="flex items-center w-full gap-x-2">
        <div className="w-[80%]">
          <BaseInput
            name="searchAddress"
            handleChange={handleSearch}
            placeHolder="Search address"
            style="!mb-0"
          />
        </div>
        <div className="w-[20%]">
          <button
            className="w-full p-2 text-white bg-blue-600 rounded-md"
            onClick={handleLocationDelete}
          >
            Delete
          </button>
        </div>
      </div>
      {/* Location suggest list like Select Box */}
      <div
        className={`${
          locations.length ? "block" : "hidden"
        } mt-2 border w-[79%] rounded-md shadow-xl overflow-y-auto max-h-[25vh]`}
      >
        {locations.length &&
          locations.map((location, index) => (
            <button
              key={index}
              value={location.street}
              className="block w-full p-2 text-lg text-left transition-all duration-500 peer hover:bg-gray-100"
              onClick={handleSuggestLocation}
            >
              {location.street}
            </button>
          ))}
      </div>

      {/* fields of location */}
      {suggestLocation && (
        <>
          <div className="flex mt-4 gap-x-2">
            <BaseInput
              name="street"
              placeHolder="Street"
              handleChange={handleLoctionInputChange}
              {...(isTyping
                ? {}
                : {
                    value: suggestLocation.street ? suggestLocation.street : "",
                  })}
            />
            <BaseInput
              name="number"
              placeHolder="Number"
              handleChange={handleLoctionInputChange}
              {...(isTyping
                ? {}
                : {
                    value: suggestLocation.number ? suggestLocation.number : "",
                  })}
            />
            <BaseInput
              name="postalCode"
              placeHolder="PostalCode"
              handleChange={handleLoctionInputChange}
              {...(isTyping
                ? {}
                : {
                    value: suggestLocation.postalCode
                      ? suggestLocation.postalCode
                      : "",
                  })}
            />
          </div>

          <div className="flex mt-4 gap-x-2">
            <div className="w-1/2">
              <BaseInput
                name="city"
                placeHolder="City"
                handleChange={handleLoctionInputChange}
                {...(isTyping
                  ? {}
                  : {
                      value: suggestLocation.city ? suggestLocation.city : "",
                    })}
              />
            </div>
            <div className="w-1/2">
              <BaseInput
                name="country"
                placeHolder="Country"
                handleChange={handleLoctionInputChange}
                {...(isTyping
                  ? {}
                  : {
                      value: suggestLocation.country
                        ? suggestLocation.country
                        : "",
                    })}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CompleteLocation;
