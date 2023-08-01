import React from "react";

const TodoBody = ({todos, setTodos}) => {

    const deleteTask = (selectedTodoId) => {
		let updatedTodos = todos.filter(todo => todo.id != selectedTodoId)
		setTodos(updatedTodos);
	}
    
    let renderTasks = todos.map(todo => {
		return (
			<li className="list-item" key={todo.id}>
				<label>{todo.title}</label>
				<button 
					className="delete-task" 
					onClick={() => deleteTask(todo.id)}
                > X </button>
			</li>
		);
	})

    return (
        <>
            <section className="main">
                <ul className="todo-list">
                    {todos.length !== 0 ? renderTasks : "No tasks, add a task."}
                </ul>					
            </section>
        </>
    );
};

export default TodoBody;