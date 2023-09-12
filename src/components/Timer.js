import React, { useState, useEffect } from 'react';

function Timer({ initialMinutes, onTimerComplete, progress }) {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(100);

  useEffect(() => {
    let interval;

    if (minutes === 0 && seconds === 0) {
      clearInterval(interval);
      onTimerComplete();
    } else {
      interval = setInterval(() => {
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }

        // Calculate progress percentage
        const totalSeconds = initialMinutes * 60;
        const remainingSeconds = minutes * 60 + seconds;
        const percentage = (remainingSeconds / totalSeconds) * 100;
        setProgressPercentage(percentage);

      }, 1000);
    }

    return () => clearInterval(interval);
  }, [minutes, seconds, onTimerComplete]);


  return (
      <div>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p>
          Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      </div>
    );
}

export default Timer;
