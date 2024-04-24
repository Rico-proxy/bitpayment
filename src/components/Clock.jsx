import React, { useState, useEffect } from 'react';


function LiveClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Function to add leading zero for single digit numbers
  const formatTimeUnit = (unit) => unit < 10 ? `0${unit}` : unit;

  return (
    <div className="flex justify-center items-center p-5 bg-gray-800">
      <div className="text-4xl text-white font-mono">
        {formatTimeUnit(currentTime.getHours())}:
        <span className="minutes animate-flip">{formatTimeUnit(currentTime.getMinutes())}</span>:
        <span className="seconds animate-flip">{formatTimeUnit(currentTime.getSeconds())}</span>
      </div>
    </div>
  );
}

export default LiveClock;
