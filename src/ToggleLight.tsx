import React, { useState } from "react";

const ToggleLight: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <p>The light is {isOn ? "On" : "Off"}</p>
      <button
        onClick={handleToggle}
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        Turn {isOn ? "Off" : "On"}
      </button>
    </div>
  );
};

export default ToggleLight;
