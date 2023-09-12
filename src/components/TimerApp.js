import React, { useState, useEffect } from 'react';
import TimerInput from './TimerInput';
import CustomButton from './CustomButton';
import Timer from './Timer';

function TimerApp() {
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  const handleMinutesChange = (newMinutes) => {
    setTimerMinutes(newMinutes);
  };

  const startTimer = () => {
    setIsTimerRunning(true);
    setIsTimerCompleted(false);
    setIsTimerPaused(false); // Reset the pause state
  };

  const pauseTimer = () => {
    setIsTimerPaused(true);
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setIsTimerCompleted(true);
  };

  const restartTimer = () => {
    setIsTimerCompleted(false);
    setIsTimerPaused(false);
    setTimerMinutes(0);
  };

  // useEffect(() => {
  //   let interval;
  //   if (isTimerRunning && !isTimerPaused) {
  //     interval = setInterval(() => {
  //       setTimerMinutes((prevMinutes) => prevMinutes - 1);
  //     }, 1000);
  //   } else {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [isTimerRunning, isTimerPaused]);

  return (
    <div className="App">
      <h1>Timer App</h1>
      {!isTimerRunning && !isTimerCompleted && (
        <TimerInput onMinutesChange={handleMinutesChange} />
      )}
      {isTimerCompleted ? (
        <>
          <p>Timer Completed!</p>
          <CustomButton
            label="Start New Timer"
            onClick={restartTimer}
            className="custom-button"
          />
        </>
      ) : (
        <>
          {isTimerRunning ? (
            <>
              <Timer initialMinutes={timerMinutes} onTimerComplete={resetTimer} />
              <CustomButton
                label="Pause Timer"
                onClick={pauseTimer}
                className="custom-button"
              />
              <CustomButton
                label="Reset Timer"
                onClick={resetTimer}
                className="custom-button"
              />
            </>
          ) : (
            <CustomButton
              label="Start Timer"
              onClick={startTimer}
              className="custom-button"
              disabled={timerMinutes <= 0}
            />
          )}
        </>
      )}
    </div>
  );
}

export default TimerApp;
