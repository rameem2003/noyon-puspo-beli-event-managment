import React from "react";

const SendingAnimation = () => {
  return (
    <div className="fixed left-0 top-0 z-[100000000] flex h-screen w-full items-center justify-center bg-black/50 backdrop-blur-md">
      <div class="loader"></div>;
    </div>
  );
};

export default SendingAnimation;
