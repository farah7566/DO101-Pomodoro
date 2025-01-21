import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('Pomodoro'); // Modes: Pomodoro, Short Break, Long Break

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    if (mode === 'Pomodoro') setTime(25 * 60);
    else if (mode === 'Short Break') setTime(5 * 60);
    else setTime(15 * 60);
  };

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <div className="mode-buttons">
        <button
          className={mode === 'Pomodoro' ? 'active' : ''}
          onClick={() => {
            setMode('Pomodoro');
            resetTimer();
          }}
        >
          Pomodoro
        </button>
        <button
          className={mode === 'Short Break' ? 'active' : ''}
          onClick={() => {
            setMode('Short Break');
            resetTimer();
          }}
        >
          Short Break
        </button>
        <button
          className={mode === 'Long Break' ? 'active' : ''}
          onClick={() => {
            setMode('Long Break');
            resetTimer();
          }}
        >
          Long Break
        </button>
      </div>
      <h1 className="time">{formatTime()}</h1>
      <button className="start-button" onClick={toggleTimer}>
        {isActive ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};

export default Timer;
