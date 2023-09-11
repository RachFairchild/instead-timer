import React, { useState } from 'react';
import TimerApp from './components/TimerApp';


function App() {
  // const [timerMinutes, setTimerMinutes] = useState(0);

  // const handleMinutesChange = (newMinutes) => {
  //   setTimerMinutes(newMinutes);
  // };

  // const handleClick = () => {
  //   console.log('Button clicked!');
  // };

  return (
    <div className="App">
      <TimerApp />
    </div>
  );
}

export default App;
