import React from "react";

const BaseLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-stone-100">
      {children}
    </div>
  );
};

export default BaseLayout;
