import React from "react";
import Flex from "./Flex";
import { ThreeCircles } from "react-loader-spinner";

const ButtonAnimation = () => {
  return (
    <Flex className="w-full items-center justify-center bg-slate-800 p-3 text-xl font-medium text-white">
      <ThreeCircles
        visible={true}
        height="30"
        width="30"
        color="#fff"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Flex>
  );
};

export default ButtonAnimation;
