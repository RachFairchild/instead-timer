import React, { useState, useEffect } from 'react';

function Timer({ initialMinutes, onTimerComplete }) {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer;
    if (minutes >= 0 && seconds >= 0) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
            onTimerComplete(); // Notify TimerApp when the timer completes
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [minutes, seconds, onTimerComplete]);

  return (
    <div>
        <p>
          Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
    </div>
  );
}

export default Timer;
