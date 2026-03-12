import React from 'react';
import { cn } from './Button';

export const FormInput = ({
  label,
  id,
  errorMessage,
  className,
  icon: Icon,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col gap-1.5 w-full", className)}>
      {label && (
        <label htmlFor={id} className="text-[13px] font-semibold text-slate-700">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-4 w-4 text-slate-400" />
          </div>
        )}
        <input
          id={id}
          className={cn(
            "w-full px-3.5 py-2.5 border rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.02)] focus:outline-none focus:ring-1 sm:text-sm transition-colors",
            Icon && "pl-10",
            errorMessage 
              ? "border-red-500 focus:ring-red-500 focus:border-red-500" 
              : "border-slate-200 focus:ring-[#007b83] focus:border-[#007b83]",
            "disabled:opacity-50 disabled:bg-slate-50 disabled:cursor-not-allowed text-slate-800 placeholder:text-slate-400"
          )}
          {...props}
        />
      </div>
      {errorMessage && (
        <p className="text-xs font-medium text-red-600 mt-0.5">{errorMessage}</p>
      )}
    </div>
  );
};
