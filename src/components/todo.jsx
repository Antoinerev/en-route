import React from 'react';
import {Link} from 'react-router-dom';


const Todo = ({todo}) => {
  return(
    <li className="todo">
      <span>{todo.title}</span>
      <Link to={`/todos/${todo.id}`} className='todo-link'>details</Link>
    </li>
  )
}
export default Todo;
