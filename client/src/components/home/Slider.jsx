import React from "react";

function Slider() {
  return (
    <div className="w-full bg-red-300">
      <Slider1 />
    </div>
  );
}

export default Slider;

const Slider1 = () => {
  return <div className="h-[400px] w-full flex">Slider1</div>;
};
