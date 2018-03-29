import React from 'react';
import './Todos.component.css';

import Todo from '../Todo/Todo.component';
import Loading from '../Loading/Loading.component';

const Todos = props => {
    const { list, deleteMethod } = props;
    return (
      <div>
        {
          list && list.length ? (
            list.map((todo, index) => <Todo key={todo.id} index={index} onClickDelete={deleteMethod} text={todo.text} />)
          ) : 'You\'re all done 🌴'
        }
      </div>
    )
}

export default Todos;