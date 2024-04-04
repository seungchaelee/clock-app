import React from "react";
import { useCurrentTime } from "./hooks/useCurrentTime";
import { useTooltip } from "./hooks/useTooltip";
import { ClockHands } from "./components/ClockHands";
import { Tooltip } from "./components/Tooltip";
import "@/styles/Clock.css";

export const Clock: React.FC = () => {
  const currentTimeString = useCurrentTime();
  const { isVisible, position, handleMouseMove, handleMouseLeave } = useTooltip();

  const currentTime = new Date(currentTimeString);

  return (
    <div
      className="clock"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <ClockHands currentTime={currentTime} />
      {isVisible && (
        <Tooltip position={position}>
          {currentTime.toLocaleTimeString()}
        </Tooltip>
      )}
    </div>
  );
};
