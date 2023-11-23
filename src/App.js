import React, { useState } from 'react';
import useInterval from './hooks/useInterval';
import './style.css';

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date().toString());
  const [delay, setDelay] = useState(1000);

  const [func, setFunc] = useState(() => {
    return () => setCurrentTime(new Date().toString());
  });

  useInterval(func, delay);

  /**somehow setters not working */
  // setFunc(() => {
  //   return () => console.log('jshdbkhdsbv');
  // });
  // setDelay(100000);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {currentTime}
    </div>
  );
}
