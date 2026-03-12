import React from 'react';
import { cn } from '../common/Button';

export const StatusBadge = ({ status, className }) => {
  const statusStyles = {
    Active: "text-[#00d7bd]",
    Pending: "text-orange-400",
    Completed: "text-emerald-400"
  };

  const appliedStyle = statusStyles[status] || "text-slate-300";

  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1.5 rounded-[6px] text-[10px] font-extrabold tracking-widest uppercase bg-slate-900/40 border border-slate-500/20 backdrop-blur-md",
      appliedStyle,
      className
    )}>
      {status}
    </span>
  );
};
