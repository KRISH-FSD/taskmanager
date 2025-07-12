import React, { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import './Task.css';

function TaskMain() {
  const [tasks, setTasks] = useState([])  

  // Function to add task
  const addTask = (text) => {
    const newTask = { id: Date.now(), text: text, completed: false }
    setTasks([...tasks, newTask])
  }

  // Function to toggle task
  // const toggleTask = (id) => {
  //   setTasks(tasks.map(task =>
  //     task.id === id
  //       ? { ...task, completed: !task.completed }
  //       : task
  //   ))
  // }

  const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
}


  return (
    <div className='task-main-container'>
      
      <div className="task-cont2">
        <div className="both">
      <h1 id='h1'>Task Management</h1>
     <div className="task-image">
  <img src="https://png.pngtree.com/png-clipart/20250124/original/pngtree-task-management-icon-design-png-image_19220340.png" alt="Task Icon" />
</div>

      </div>
      <TaskForm addTask={addTask} />
     <TaskList tasks={tasks} deleteTask={deleteTask} />

      <p id='task-count'> Task {tasks.length}</p>
    </div>
    </div>
    
  )
}

export default TaskMain
