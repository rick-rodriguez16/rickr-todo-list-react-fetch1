import React from "react";

const TodoBody = ({counter, todos, setTodos}) => {

    const deleteTask = (taskId) => {
		let updatedTodos = todos.filter(task => task.id != taskId)
		setTodos(updatedTodos);
	}
    
    let renderTasks = todos.map(task => {
		return (
			<li className="list-item" key={task.id}>
				<label>{task.title}</label>
				<button 
					className="delete-task" 
					onClick={() => deleteTask(task.id)}> X </button>
			</li>
		);
	})

    return (
        <>
            <section className="main">
                <ul className="todo-list">
                    {counter !== 0 ? renderTasks : "No tasks, add a task."}
                </ul>					
            </section>
        </>
    );
};

export default TodoBody;