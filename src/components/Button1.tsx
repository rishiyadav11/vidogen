"use client";
import React from 'react';

interface ButtonProps {
  id: string;
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClass?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  id,
  title,
  leftIcon,
  rightIcon,
  containerClass = "",
  onClick
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-3 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-2 focus:ring-offset-transparent active:scale-95 ${containerClass}`}
    >
      {leftIcon && (
        <span className="transition-transform duration-200">
          {leftIcon}
        </span>
      )}
      <span>{title}</span>
      {rightIcon && (
        <span className="transition-transform duration-200">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;