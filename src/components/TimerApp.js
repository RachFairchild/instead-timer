import React, { useState, useEffect } from 'react';
import TimerInput from './TimerInput';
import CustomButton from './CustomButton';
import Timer from './Timer';

function TimerApp() {
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);


  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [pausedMinutes, setPausedMinutes] = useState(0); // Store paused minutes
  const [pausedProgress, setPausedProgress] = useState(0); // Store paused progress

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

    setPausedMinutes(timerMinutes); // Store current time when pausing
    // setPausedProgress(pausedMinutes / timerMinutes); // Store current progress when pausing
    setPausedProgress((timerMinutes - pausedMinutes) / timerMinutes * 100); // Calculate paused progress
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

  return (
    <div className="App">
      <h1>Timer App</h1>

      {/* Timer isn't running, timer isn't completed, timer isn't paused */}
      {!isTimerRunning && !isTimerCompleted && !isTimerPaused && (
        <TimerInput onMinutesChange={handleMinutesChange} />
      )}

      {/* Timer is completed */}
      {isTimerCompleted ? (
        <>
          <p>Timer Completed!</p>
          <CustomButton
            label="Start New Timer"
            onClick={restartTimer}
            className="custom-button"
          />
        </>
      // Timer ISN'T completed
      ) : (
        <>
          {/* IF the timer is running but not complete... */}
          {isTimerRunning ? (
            <>
              <Timer 
                initialMinutes={timerMinutes} 
                onTimerComplete={resetTimer}
                pausedMinutes={pausedMinutes} // Pass paused minutes
                pausedProgress={pausedProgress} // Pass paused progress
              />
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
            // If timer is not running but also not complete...
            <>
              {!isTimerRunning && !isTimerCompleted && isTimerPaused && (
                <>
                  <Timer 
                    initialMinutes={pausedMinutes} 
                    onTimerComplete={resetTimer}
                    pausedMinutes={pausedMinutes} // Pass paused minutes
                    pausedProgress={pausedProgress} // Pass paused progress 
                  />
                  <p>Timer paused!</p>
                  <CustomButton
                    label="Restart Timer"
                    onClick={restartTimer}
                    className="custom-button"
                    disabled={timerMinutes <= 0}
                  />
                </>
              )}
              <CustomButton
                label="Start Timer"
                onClick={startTimer}
                className="custom-button"
                disabled={timerMinutes <= 0}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default TimerApp;