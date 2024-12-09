import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-container px-4 md:px-10 2xl:px-0">
      {children}
    </div>
  );
};

export default Container;
