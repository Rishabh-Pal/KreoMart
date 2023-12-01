import React from "react";

const Additionalinfo = () => {
  const info: Record<string, string> = {
    length: "Short",
    Sleeve_Length: "Short sleeve",
    Fit: "Slim fit",
    Neckline: "Square neckline",
    Description: "Light Pink, Solid Color",
    Country_of_production: "Inida",
    Composition: "Cotton 85%, Polyester 10%, Elastane 5%",
    Material: "Jersey",
  };
  const keysArray = Object.keys(info);
  const mappedKeys: string[] = keysArray;
  const mappedValues: string[] = keysArray.map((key) => info[key]);

  return (
    <div>
      <div className="flex gap-x-[76px] my-[40px]">
        <div className="flex-item">
          {mappedKeys.map((key) => (
            <div className="py-2 text-base font-medium text-gray-500" key={key}>
              {key}
            </div>
          ))}
        </div>
        <div className="flex-item">
          {mappedValues.map((key) => (
            <div className="py-2 text-base font-medium" key={key}>
              {key}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Additionalinfo;
