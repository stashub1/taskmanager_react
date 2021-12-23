import {useState} from 'react';


const AddTask = (props) => {

  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
  	e.preventDefault();

  	if (!name) {
  		alert("Please add name");
  		return;
  	}

  	props.onAdd({name, day, reminder});

  	console.log("Add task log", name, day, reminder);
  	setName("");
  	setDay("");
  	setReminder(false);

  }

  return (
  	 <form className="add-task"  onSubmit={onSubmit}>
  	 	<div className="form-control">
  	 		<label>Task name</label>
  	 		<input
  	 			type="text" 
  	 			placeholder="Add task"
  	 			value={name}
  	 			onChange={(e) => setName(e.target.value)}
  	 			></input>
 		</div>
 		<div className="form-control">
  	 		<label>Day and Time</label>
  	 		<input
  	 			type="text" 
  	 			placeholder="Add day and time"
  	 			value={day}
  	 			onChange={(e) => setDay(e.target.value)}
  	 			></input>
 		</div>
 		<div className="form-control form-control-check">
  	 		<label>Set Reminder</label>
  	 		<input 
  	 			type="checkbox"
  	 			value={reminder}
  	 			checked={reminder}
  	 			onChange={(e) => setReminder(e.currentTarget.checked)}
  	 			></input>
 		</div>
 
 		<input type="submit" value="Save Task" className="btn btn-block"/>
  	 </form>
  );
}


export default AddTask;	
