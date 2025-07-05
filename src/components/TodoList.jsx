import React from 'react';

const TodoList = ({todos = []}) => {
  return (
    <div>
        <h2 className="text-lg font-semibold mb-4">Todo List</h2>
        <ul>
            {
              todos.map((todo, index) => {
                return(
                  <li key={index}>{todo}</li>
                )
              })
            }
        </ul>
    </div>
  )
}

export default TodoList;