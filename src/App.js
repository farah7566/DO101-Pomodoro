import React from 'react';
import Timer from './Timer';
import TaskList from './TaskList';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="timer-container">
        <Timer />
      </div>
      <div className="task-container">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
