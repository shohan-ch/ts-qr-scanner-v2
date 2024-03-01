import React, { useEffect, useState } from "react";
import colors from "../../../data/colorPlate.json";
import { useDispatchData } from "contextApi/DataContext";

interface SelectedColor {
  id?: number;
  primary?: string;
  secondary?: string;
}

const ColorPicker = () => {
  const [selectedColor, setselectedColor] = useState<SelectedColor>({});
  const dispatchData = useDispatchData();

  useEffect(() => {
    dispatchData({
      type: "ADD",
      payload: {
        name: "ColorPicker",
        value: selectedColor,
      },
    });
  }, [selectedColor]);

  const handleColorPicker = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let findColor = colors.find((color) => color.id.toString() == value);
    setselectedColor(findColor!);
  };

  const changedColorByPicker =
    (type: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setselectedColor((prev) => ({ ...prev, [type]: e.target.value }));
    };

  const showIndividualColor = (name: keyof SelectedColor) => {
    return (
      <div>
        <h4>{name.charAt(0).toUpperCase() + name.slice(1)}</h4>
        <div className="flex justify-between gap-4 p-3 mt-4 bg-white border rounded-full w-60">
          <p>{selectedColor[name]}</p>
          <div>
            <input
              type="color"
              value={selectedColor[name]}
              className="w-10 rounded cursor-pointer"
              onChange={changedColorByPicker(name)}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <h4 className="font-semibold text-gray-600">Color plate *</h4>

      <div className="flex mb-5 overflow-x-auto gap-x-3 ">
        {colors.map((color, index) => (
          <div key={index}>
            <input
              onChange={handleColorPicker}
              type="radio"
              name="colorPlate"
              id={`${color.id}`}
              value={`${color.id}`}
              className="appearance-none peer"
            />
            <label
              htmlFor={`${color.id}`}
              className="cursor-pointer w-[170px] p-1 flex gap-x-2 justify-between border-2 peer-checked:border-red-600"
            >
              <div
                style={{ background: color.primary }}
                className={`w-[50%] h-[45px]`}
              ></div>

              <div
                style={{ background: color.secondary }}
                className={`w-[50%] h-[45px]`}
              ></div>
            </label>
          </div>
        ))}
      </div>
      {/* Selected color picker */}

      <div className="flex justify-between p-4 bg-gray-100 ">
        {showIndividualColor("primary")}
        {showIndividualColor("secondary")}
      </div>
    </>
  );
};

export default ColorPicker;
