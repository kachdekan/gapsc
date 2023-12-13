import React from "react";
import Spinner from "./spinner";

const LoadingScreen = () => {
  return (
    <>
      <div className="absolute inset-0 bg-transparent w-full h-full flex items-center justify-center z-50">
        <Spinner />
      </div>
    </>
  );
};

export default LoadingScreen;
