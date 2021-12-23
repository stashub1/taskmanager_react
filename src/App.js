import React, {useState, useEffect} from 'react';
import './App.css';
import './index.css';
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/add_task";
import { v4 as uuidv4 } from 'uuid';

// const tasksPrepared  = [
// 	{id: uuidv4(), day: "Feb 5 at 2.30", name: "Go to Appointment", reminder: true},
// 	{id: uuidv4(), day: "Feb 6 at 12.30",name: "Get a car", reminder: true},
// 	{id: uuidv4(), day: "Feb 8 at 1.30", name: "Fly to Paris", reminder: false}
// ];

// const initialExpenses = [
//   {id:uuidv4(), charge:"rent", amount:1600},
//   {id:uuidv4(), charge:"car payment", amount:400},
//   {id:uuidv4(), charge:"credit card bill", amount:1200}
// ];


function App() {

	const [tasks, setTasks] = useState("");
	const [showAddTask, setShowAddTask] = useState(false);


	useEffect(() => {

		const getTasks = async() => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		}

		getTasks();
	}, [])

	const fetchTasks = async () =>  {
		const result = await fetch('http://localhost:5000/tasks');
		const data = await result.json();
		console.log("data ", data); 
		return data;
	}



	const addTask = async (task) => {
		const id = uuidv4();
		const newTask = {id, ...task};
		// console.log("new task ", newTask);
		// setTasks([...tasks, newTask]);
		const res = await fetch(`http://localhost:5000/tasks`, 
			{ method: 'POST',
			 headers: {
			 	'Content-type' : 'application/json'
			 }, 
			 body: JSON.stringify(newTask),
		})

		const data = res.json();
		setTasks([...tasks, data]);
	}

	const toggleShowAddTask = function() {
		console.log("show add task ", !showAddTask);
		setShowAddTask(!showAddTask);
	}

	const showAddTaskForm = function(showAddTask) {
		var addTaskHTML;
		if(showAddTask) {
			addTaskHTML = <AddTask onAdd={addTask} />;
		} else {
			addTaskHTML = "";
		}
		return addTaskHTML;
	}

	const setTestForAddTaskButton = function() {
		var text;
		if(showAddTask) {
			text = "Close";
		} else {
			text = "Add task";
		}
		return text;
	}

	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`,
		 {method : "delete"});
		setTasks(tasks.filter((task) => task.id !== id));
	}

	//Toggle reminder
	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => task.id === id ?
				{...task, reminder : !task.reminder} 
				: task
				)
		)
		console.log("tasks", tasks);
	}

    return (
	      <div className="container">
	         <Header 
	         	toggleShowAddTask={toggleShowAddTask} 
	         	setButtonText={setTestForAddTaskButton}
	         />
            {showAddTaskForm(showAddTask)}
         	{(tasks.length > 0) ?
	          <Tasks 
	          	tasks={tasks} 
	          	onToggle={toggleReminder} 
	          	onDelete={deleteTask}
	          	 />
	          	
	          : "No tasks to show"
         	}


	      </div>
	  );
}


export default App;
