import React, { Component } from 'react';
import './Todo.component.css';

const Todo = props => {
  const { index, text, onClickDelete } = props;
  return (
    <div className="todo-item">
      {text}
      <span onClick={() => onClickDelete(index)}>&times;</span>
    </div>
  )
}

export default Todo;