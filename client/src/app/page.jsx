import Section2 from "@/components/home/Section2";
import Slider from "@/components/home/Slider";
import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center">
      <Slider />
      <Section2 />
    </div>
  );
}

export default page;
