import React from "react";
import "@/styles/Clock.css";

interface HandProps {
  type: "hour" | "minute" | "second";
  degree: number;
}

export const Hand: React.FC<HandProps> = React.memo(({ type, degree }) => {
  return (
    <div
      className={`hand ${type}`}
      style={{ transform: `rotate(${degree}deg)` }}
    />
  );
});
