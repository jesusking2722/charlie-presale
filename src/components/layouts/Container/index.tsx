import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-center bg-contain bg-no-repeat overflow-hidden background-image">
      <div className="flex-grow w-full mx-auto px-14 mt-14">{children}</div>
      <div className="h-20"></div>
    </div>
  );
};

export default Container;
