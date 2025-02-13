"use client";

import React from "react";

export const Ripple = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-10 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
};