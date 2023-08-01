import React from "react";

const TodoHeader = ({todos, setTodos, newTask, setNewTask, counter, setCounter}) => {
    
    const addTask = () => {
		console.log("Creating new task: ", newTask);
		
		let newTodoObject = {
			id: counter,
			title: newTask,
			done: false
		}
		
		setTodos([...todos, newTodoObject])

		// setTodos([...todos, {
		// 	id: counter,
		// 	title: newTask,
		// 	done: false,
		// }])

		setCounter(counter + 1);
	}

    const checkTextbox = () => {
        let textBox = document.querySelector(".new-todo");
        if (textBox.value === "") {
            alert("Please add a task.");
        }
        else {
            addTask();
        }
    }

    return (
        <>
            <header className="header">
                <h1>todos</h1>
                <input 
                    type="text" 
                    className="new-todo"
                    placeholder="What needs to be done?"
                    onChange={event => setNewTask(event.target.value)}
                    value={newTask}
                />
                <button 
                    className="add-task"
                    onClick={checkTextbox}
                >Add Task</button>
            </header>
        </>
    );
};

export default TodoHeader;
