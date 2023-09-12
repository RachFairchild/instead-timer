import React, { useState } from 'react';

function TimerInput({ onMinutesChange }) {
  const [minutes, setMinutes] = useState(0);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setMinutes(inputValue);
    onMinutesChange(inputValue);
  };

  return (
    <div className="timer-input">
      <label htmlFor="timer-input">Set Timer (minutes): </label>
      <input
        type="number"
        id="timer-input"
        value={minutes}
        onChange={handleInputChange}
        min="0"
      />
    </div>
  );
}

export default TimerInput;
