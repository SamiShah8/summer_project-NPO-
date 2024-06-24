import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ className, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        "border-none outline-none py-2 px-3 text-white font-semibold  bg-emerald-300 rounded-md " +
        className
      }
    >
      {title}
    </button>
  );
};

export default Button;
