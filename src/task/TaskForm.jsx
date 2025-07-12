import React, { useState } from 'react'
import './Task.css';
function TaskForm({addTask}) {
  
    const [value,setValue]=useState("")

    //form addtask button
    const handlesubmit =(e)=>{

      //prevents from reload after submit
        e.preventDefault()

        //if else
        if(value.trim() != ""){
        console.log("task added" + value)
        addTask(value)
        }
        else{
            alert("fill the input box")
        }

        //erase the inpu box after submit
        setValue("")

    }
  return (
    <div>
      <form onSubmit={handlesubmit} id='forms'>
    
        <input type="text" onChange={(e)=>setValue(e.target.value)} placeholder='Enter yout task here!' value={value} id='task-input' />
        <button id='btn-form'>Submit</button>
      </form>
    </div>
  )
}

export default TaskForm
