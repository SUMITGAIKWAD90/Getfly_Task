import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#007b83] text-white hover:bg-[#006A72] focus:ring-[#007b83] border border-transparent",
    secondary: "bg-[#f1f5f9] text-[#0f172a] hover:bg-[#e2e8f0] border border-transparent focus:ring-slate-200",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 border border-transparent"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes.md, 
        fullWidth ? "w-full" : "",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
