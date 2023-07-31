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
                    onSubmit={addTask}
                />
                <button 
                    className="add-task"
                    onClick={addTask}
                >Add Task</button>
            </header>
        </>
    );
};

export default TodoHeader;