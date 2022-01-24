import React from 'react';
import { useTodoLayerValue } from '../context/TodoContext';

const Todo = ({todo}) => {

    const [{}, dispatch] = useTodoLayerValue();
    
    const removeTodo = (todoId) => {
        dispatch({
          type: 'REMOVE_TODO',
          payload: todoId,
        });
      };

  return (
    <div className='todo-row'>
        <div>
            {todo.content}
        </div>

        <div>
        <button className='delete-button' onClick={() => removeTodo(todo.id)}>Delete</button>
        <button className='check-button'>Check</button>
        </div>
    </div>
  )
}

export default Todo;
