import React, {useState} from 'react';
import {useTodoLayerValue} from './context/TodoContext';
import'./App.css';
import TodoList from './components/TodoList'
import Header from "./components/Header";

const App = () => {
  //todos u alirim action firlatmak icin de dispatch
  const [{todos}, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState('');
  
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (content) {
      const newTodo = {
        id: Math.floor(Math.random() * 39399393),
        content,
        isCompleted: false,
      };

      dispatch({
        type: 'ADD_TODO',
        payload: newTodo,
      });

      setContent('');
    }
  };

  return (
    <div className='container'>
      <Header/>
      <form onSubmit={handleSubmit} className='todo-form'>
        <input type='text' className='todo-input' onChange={event => setContent(event.target.value)} value={content}/>
        <button className='todo-button'>Add</button>
      </form>

    <TodoList todos={todos} />

    </div>
  )
};

export default App;
