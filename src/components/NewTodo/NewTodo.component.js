import React, { Component } from 'react';
import './NewTodo.component.css';

const NewTodo = props => {
  const { item, change, add } = props;
  return (
    <div className="todo-input">
        <input onChange={change} placeholder="..." type="text" value={item}/>
        <button onClick={add}>Add</button>
    </div>
  )
}

export default NewTodo;



