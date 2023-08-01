import React, { useState, useEffect } from "react";

const TodoBody = ({todos, setTodos}) => {
    

    // const deleteTask = (selectedTodoId) => {
	// 	let updatedTodos = todos.filter(todo => todo.id != selectedTodoId)
	// 	setTodos(updatedTodos);
	// }
    
    // let renderTasks = todos.map(todo => {
	// 	return (
	// 		<li className="list-item" key={todo.id}>
	// 			<label>{todo.title}</label>
	// 			<button 
	// 				className="delete-task" 
	// 				onClick={() => deleteTask(todo.id)}
    //             > X </button>
	// 		</li>
	// 	);
	// })

    useEffect(() => {
        fetch('https://fake-todo-list-52f9a4ed80ce.herokuapp.com/todos/user/rickr')
        .then(response => response.json())
        .then(data => setTodos(data))
    }, [])

    let renderTasks = todos.map(todo => {
		return (
                <li className="list-item" key={todo.id}>
                    <label>{todo.label}</label>
                </li>
		);
	})

    return (
        <>
            <section className="main">
                <ul className="todo-list">
                    {/* {todos.length !== 0 ? renderTasks : "No tasks, add a task."} */}
                    {renderTasks}
                </ul>					
            </section>
        </>
    );
};

export default TodoBody;