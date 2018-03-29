import React, { Component } from 'react';
import { uniqueId } from 'lodash';

import Todos from './components/Todos/Todos.component';
import NewTodo from './components/NewTodo/NewTodo.component';

class App extends Component {

  state = {
    todo: '',
    todos: [ { text: 'Add your first todo' } ]
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { todos: prevTodos } = prevState;
    const { todos } = this.state;
    if ( prevTodos.length !== todos.length ) {
      document.querySelector('#counter').innerText = todos.length;
    }
  }

  handleChange = event => this.setState({ todo: event.target.value });

  handleClickAdd = () => {
    const { todo, todos } = this.state;
    todo && this.setState({ todos: [ ...todos, { text: todo } ], todo: '' });
  };

  handleClickDelete = index => {
    console.log(`Deleting todo number ${index}`);
    const { todos } = this.state;
    this.setState({ todos: [
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
    ]});
  }

  render() {
    if (!this.state.todos) return <Loading />

    this.state.todos.forEach((todo, index) => {
      this.state.todos[index] = { ...todo, id: uniqueId() };
    });

    const { todo, todos } = this.state;

    return (
      <div className="todo-list">
        <h1>todos</h1>
        <p><span id="counter">1</span> remaining</p>
        <Todos list={todos} deleteMethod={this.handleClickDelete} />
        <NewTodo item={todo} change={this.handleChange} add={this.handleClickAdd} />
      </div>
    )
  }

}

export default App;