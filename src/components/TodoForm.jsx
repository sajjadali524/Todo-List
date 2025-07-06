import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';

const TodoForm = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(getTodos);
  }, []);

  const addAndUpdateTodo = () => {
    if(!todoText.trim()) return;
    let updatedTodos;
    if(editIndex !== null) {
      // update text
      updatedTodos = todos.map((todo, index) => {
      return index === editIndex ? {...todo, text: todoText, isCompleted: false } : todo;
      })
    }else {
      updatedTodos = [{text: todoText, isCompleted: false}, ...todos]
    }
    
    setTodos(updatedTodos)
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodoText("");
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setTodoText(todos[index].text);
    setEditIndex(index);
  };

  return (
    <div className="lg:w-1/2 w-full bg-white shadow-md rounded-md p-6 space-y-5">
        <div className="flex items-center justify-center gap-3 w-full">
            <input type="text" placeholder="Add a new todo" value={todoText} onChange={(e) => setTodoText(e.target.value)} className="w-full outline-none rounded-md px-5 py-2 border border-gray-100" />
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer" onClick={addAndUpdateTodo}>{editIndex !== null ? "Update" : "Add"}</button>
        </div>
        <TodoList todos={todos} setTodos={setTodos} onEdit={handleEdit} />
    </div>
  )
}

export default TodoForm;