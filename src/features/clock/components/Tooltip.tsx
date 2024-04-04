import React from "react";

interface TooltipProps {
  position: { x: number; y: number };
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ position, children }) => (
  <div
    className="tooltip"
    style={{
      position: "fixed",
      left: `${position.x}px`,
      top: `${position.y}px`,
    }}
  >
    {children}
  </div>
);
