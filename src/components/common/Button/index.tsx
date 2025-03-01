import React, { FC } from "react";
import { Icon } from "@iconify/react";

interface ButtonProps {
  type: "colorful" | "default" | "outline" | "blue" | "text" | "icon";
  label: string;
  icon?: string;
  iconPosition?: "left" | "right";
  width?: "full" | number;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  type,
  label,
  icon,
  iconPosition,
  width,
  onClick,
}) => {
  if (type === "icon" && icon) {
    return (
      <button
        className="bg-transparent transition hover:scale-105 p-2 hover:shadow-md hover:shadow-black rounded-full"
        onClick={onClick}
      >
        <Icon icon={icon} className="text-white w-6 h-6" />
      </button>
    );
  }
  // Calculate width class or inline style
  const widthClass = width === "full" ? "w-full" : "";
  const widthStyle = typeof width === "number" ? { width: `${width}px` } : {};

  return (
    <button
      className={`flex flex-row items-center justify-center py-3 rounded-xl px-5 gap-2 text-white transition-all duration-300 ease-in-out text-sm font-semibold 
    ${widthClass} 
    ${type === "default" ? "bg-[#1F1F21] hover:bg-[#353537]" : ""} 
    ${type === "blue" ? "bg-[#3069FF] hover:bg-[#4076FF]" : ""} 
    ${
      type === "outline" &&
      "bg-[#131314] border border-[#3D3D3F] hover:bg-[#1E1E1F]"
    }
    ${type === "text" && "bg-transparent hover:bg-[#1E1E1F]"}
    `}
      style={widthStyle}
      onClick={onClick}
    >
      {iconPosition === "left" && icon && (
        <Icon icon={icon} className="text-white w-6 h-6" />
      )}
      {label}
      {iconPosition === "right" && icon && (
        <Icon icon={icon} className="text-white w-6 h-6" />
      )}
    </button>
  );
};

export default Button;
