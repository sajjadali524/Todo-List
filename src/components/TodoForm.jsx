import React, { useState } from 'react';
import TodoList from './TodoList';

const TodoForm = () => {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState("");

    const addTodoToList = () => {
      setTodos([...todos, todoText]);
      setTodoText("");
    };

  return (
    <div className="w-1/2 bg-white shadow-md rounded-md p-6 space-y-5">
        <div className="flex items-center justify-center gap-3 w-full">
            <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} placeholder="Add a new todo" className="w-full outline-none rounded-md px-5 py-2 border border-gray-100" />
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer" onClick={() => addTodoToList()}>Add</button>
        </div>

        <TodoList todos={todos} />
    </div>
  )
}

export default TodoForm;