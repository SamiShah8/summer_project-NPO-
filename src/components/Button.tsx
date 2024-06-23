import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

interface Animal<T> {
  eyes: number;
  legs: T;
}

interface monkey extends Animal<number> {
  tails: number;
}

const Button: React.FC<ButtonProps> = ({ className, title }) => {
  return (
    <button
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
