import PropTypes from "prop-types";
import Task from "./Task";


const Tasks = (props) => {
  
 
  return (
  	<>
  		{props.tasks.map((task) => (
  			<Task 
  			key={task.id}
  			 task={task}
  			  onToggle={props.onToggle}
  			   onDelete={props.onDelete}
  			   />
  		))}
  			
  	</>	
  );
}


export default Tasks;	
	