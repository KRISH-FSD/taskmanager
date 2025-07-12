import React, { useEffect, useState } from 'react';
import './Task.css';

function TaskList({ tasks, deleteTask }) {
  const [animatedTaskIds, setAnimatedTaskIds] = useState([]);

  useEffect(() => {
    const newIds = tasks.map(task => task.id);
    setAnimatedTaskIds(newIds);
  }, [tasks]);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} className={animatedTaskIds.includes(task.id) ? 'fade-in' : ''}>
          {task.text}
          <button id="li-btn" onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

