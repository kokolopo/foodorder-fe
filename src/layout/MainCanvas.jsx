import React from "react";

const MainCanvas = ({ children }) => {
  return (
    <div className="h-full md:w-1/3 sm:w-full w-full px-3 py-3 bg-white space-y-6">
      {children}
    </div>
  );
};

export default MainCanvas;
