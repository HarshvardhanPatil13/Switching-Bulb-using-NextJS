import React, { useState } from 'react';

const LightSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState(false);  // Define isOn state

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);  // Toggle the state on button click
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {/* Bulb */}
      <div className="relative w-32 h-40 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 300"
          className="w-full h-full"
        >
          {/* Glass Bulb */}
          <path
            d="M50 50 Q100 20, 150 50 Q180 100, 150 150 Q100 180, 50 150 Q20 100, 50 50 Z"
            fill={isOn ? "rgba(255,255,0,0.7)" : "#e0e0e0"}
            className={`${
              isOn
                ? "drop-shadow-[0_0_30px_rgba(255,255,0,0.7)]"
                : "opacity-50"
            } transition-all duration-300`}
          />

          {/* Metal Screw Base */}
          <path
            d="M70 150 L130 150 L125 200 Q100 220, 75 200 Z"
            fill="#718096"
            className="transition-colors duration-300"
          />

          {/* Filament */}
          {isOn && (
            <path
              d="M80 100 Q90 90, 100 100 Q110 110, 120 100"
              stroke="#FFC107"
              strokeWidth="4"
              fill="none"
              className="animate-pulse"
            />
          )}
        </svg>
      </div>

      {/* Switch */}
      <div className="mt-8">
        <div
          onClick={toggleSwitch}
          className={`w-16 h-8 bg-gray-300 rounded-full cursor-pointer relative transition-colors duration-300 shadow-md hover:scale-105 active:scale-95 ${isOn ? "bg-green-400" : "bg-red-400"}`}
        >
          <div
            className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${isOn ? "translate-x-8" : "translate-x-1"}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LightSwitch;
