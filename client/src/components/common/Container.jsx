import React from "react";

function Container({ children, containerStyle = "" }) {
  return (
    <div className={`w-screen ${containerStyle}`}>
      <div className="xl:w-11/12 lg:px-[3rem] px-4 mx-auto">{children}</div>
    </div>
  );
}

export default Container;
