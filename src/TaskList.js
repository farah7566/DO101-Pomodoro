import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, text: task }]);
      setTask('');
    }
  };

  return (
    <div className="task-list">
      <h3>Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.id}. {task.text}</span>
          </li>
        ))}
      </ul>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>+ Add Task</button>
      </div>
    </div>
  );
};

export default TaskList;
