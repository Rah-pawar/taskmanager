import React from 'react'
import TaskForm from './TaskForm'
import Tasks from './Tasks'
import { FaTrash} from "react-icons/fa";
import {IoMdDoneAll} from "react-icons/io";
function TaskList({task,index,onComplete,remove}) {
   
    return (
        <div className="task" style={{textDecoration:task.status?'line-through':''}}>
             {task.title}
      <IoMdDoneAll   style={{marginLeft:'auto',  color: '#bbb'}} onClick={()=>onComplete(index)}/> 
        <FaTrash onClick={()=>remove(index)}/>
        
          </div>
    )
}

export default TaskList
