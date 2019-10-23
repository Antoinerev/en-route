import React from 'react';
import Todo from './todo.jsx';


const Todos = ({todos}) => {
  return(
      <div>
        <ul>
        {todos && todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
        </ul>
      </div>
  )
}
export default Todos;
