import React from "react";
import { Hand } from "./Hand";

interface ClockHandsProps {
  currentTime: Date;
}

export const ClockHands: React.FC<ClockHandsProps> = ({ currentTime }) => {
  const secondDegrees = currentTime.getSeconds() * 6;
  const minuteDegrees = currentTime.getMinutes() * 6 + currentTime.getSeconds() * 0.1;
  const hourDegrees = (currentTime.getHours() % 12) * 30 + currentTime.getMinutes() * 0.5;

  return (
    <>
      <Hand type="hour" degree={hourDegrees} />
      <Hand type="minute" degree={minuteDegrees} />
      <Hand type="second" degree={secondDegrees} />
    </>
  );
};
