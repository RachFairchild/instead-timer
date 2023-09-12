import React, { useState, useEffect } from 'react';

function Timer({ initialMinutes, onTimerComplete }) {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(100);

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

        // Calculate progress percentage
        const totalSeconds = initialMinutes * 60;
        const remainingSeconds = minutes * 60 + seconds;
        const percentage = (remainingSeconds / totalSeconds) * 100;
        setProgressPercentage(percentage);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [minutes, seconds, initialMinutes, onTimerComplete]);

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


// import React, { useState, useEffect } from 'react';

// function Timer({ initialMinutes, onTimerComplete, progress }) {
//   const [minutes, setMinutes] = useState(initialMinutes);
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     let interval;

//     if (minutes === 0 && seconds === 0) {
//       clearInterval(interval);
//       onTimerComplete();
//     } else {
//       interval = setInterval(() => {
//         if (seconds === 0) {
//           setMinutes((prevMinutes) => prevMinutes - 1);
//           setSeconds(59);
//         } else {
//           setSeconds((prevSeconds) => prevSeconds - 1);
//         }
//       }, 1000);
//     }

//     return () => clearInterval(interval);
//   }, [minutes, seconds, onTimerComplete]);

//   // Calculate the width of the progress bar based on the progress prop
//   const progressBarWidth = `${progress * 100}%`;

//   return (
//     <div className="timer">
//       <div className="progress-bar-container">
//         <div
//           className="progress-bar"
//           style={{ width: progressBarWidth }}
//         ></div>
//       </div>
//       <div className="time">
//         <span>{String(minutes).padStart(2, '0')}</span>:
//         <span>{String(seconds).padStart(2, '0')}</span>
//       </div>
//       <div className="progress-bar" style={{ width: progressBarWidth }}></div>
//     </div>
//   );
// }

// export default Timer;
