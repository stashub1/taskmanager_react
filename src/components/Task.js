import {FaTimes} from "react-icons/fa";
import React from 'react';

const Task = (props) => {


  function setReminderClass(task) {
  	console.log("task reminder, ", task.reminder);
  	let classHTML = "";
  	if(task.reminder) {
  		classHTML = "task reminder";
  	} else {
  		classHTML = "task";
  	}
  	return classHTML;
  }
 
  return (
  	<div className={setReminderClass(props.task)}
  		onDoubleClick={() => props.onToggle(props.task.id)}
  		style={{cursor: 'pointer'}}
  		>
  		<h3>{props.task.name}
  		 <FaTimes
  		 	 onClick={() => props.onDelete(props.task.id)} 
  		 	  style={{color: 'red', cursor: 'pointer'}}
  		 	/>
  		</h3>
  		<p>{props.task.day}</p>
  	</div>
  );
}


export default Task;	
	