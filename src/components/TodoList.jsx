import React, { useState } from 'react';

const TodoList = ({todos, setTodos, onEdit}) => {
  const deleteTodo = (i) => {
    const updatedTodo = todos.filter((todo, index) => index !== i);
    setTodos(updatedTodo);
    localStorage.setItem("todos", JSON.stringify(updatedTodo))
  };

  const completedTodo = (i) => {
    const updatedTodo = todos.map((todo, index) => {
      if(index === i) {
        return {...todo, isCompleted: true}
      }
      return todo;
    });
    setTodos(updatedTodo);
    localStorage.setItem("todos", JSON.stringify(updatedTodo))
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Todo List</h2>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between">
            <span className={todo.isCompleted ? "text-red-500 line-through" : "text-black"}>{todo.text}</span>
            <div className="flex items-center gap-2">
              <button className="bg-blue-500 px-2 py-1 rounded-md text-white" onClick={() => onEdit(index)}>Edit</button>
              <button className="bg-red-500 px-2 py-1 rounded-md text-white" onClick={() => deleteTodo(index)}>Delete</button>
              <button className="bg-green-500 px-2 py-1 rounded-md text-white" onClick={() => completedTodo(index)}>Complete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
