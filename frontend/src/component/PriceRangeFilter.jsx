import React, { useState } from "react";
import { Range } from "react-range";

const PriceRangeFilter = ({ min, max, onChange }) => {
  const [values, setValues] = useState([min, max]);

  const handleChange = (newValues) => {
    setValues(newValues);
    onChange(newValues); // Pass to parent
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Price</h2>

      <Range
        step={1}
        min={min}
        max={max}
        values={values}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-1 bg-gray-300 rounded"
            style={{
              ...props.style,
              background: `linear-gradient(to right, 
                #d1d5db ${(values[0] - min) / (max - min) * 100}%, 
                #4f46e5 ${(values[0] - min) / (max - min) * 100}%, 
                #4f46e5 ${(values[1] - min) / (max - min) * 100}%, 
                #d1d5db ${(values[1] - min) / (max - min) * 100}%)`
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="w-4 h-4 bg-indigo-600 rounded-full shadow"
          />
        )}
      />

      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>RM {values[0]}</span>
        <span>RM {values[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
