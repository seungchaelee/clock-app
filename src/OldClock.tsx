import React, { useState, useEffect } from "react";

const OldClock: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const secondsDegree = date.getSeconds() * 6;
  const minutesDegree = date.getMinutes() * 6 + date.getSeconds() * 0.1;
  const hoursDegree = (date.getHours() % 12) * 30 + date.getMinutes() * 0.5;

  return (
    <div className="clock">
      <div
        className="hand hour"
        style={{ transform: `rotate(${hoursDegree}deg)` }}
      ></div>
      <div
        className="hand minute"
        style={{ transform: `rotate(${minutesDegree}deg)` }}
      ></div>
      <div
        className="hand second"
        style={{ transform: `rotate(${secondsDegree}deg)` }}
      ></div>
    </div>
  );
};

export default OldClock;
