import React, { useState } from 'react';
import TimerInput from './TimerInput';
import CustomButton from './CustomButton';
import Timer from './Timer';

function TimerApp() {
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);

  const handleMinutesChange = (newMinutes) => {
    setTimerMinutes(newMinutes);
  };

  const startTimer = () => {
    setIsTimerRunning(true);
    setIsTimerCompleted(false);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setIsTimerCompleted(true);
  };

  const restartTimer = () => {
    setIsTimerCompleted(false);
    setTimerMinutes(0);
    // setIsTimerRunning(false);
  };

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
            <Timer initialMinutes={timerMinutes} onTimerComplete={resetTimer} />
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
