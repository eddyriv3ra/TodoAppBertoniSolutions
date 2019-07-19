import React, { Component } from 'react';
import AddInputForm from '../AddTodoForm/AddTodoForm';
import Items from '../Items/Items';
import './Todo.scss';

class Todo extends Component {

  state = {
    todos: [],
  }

  handleSubmit = value => {
    this.setState(state => {
      const newtodo = state.todos.concat(value);

      return {
        todos: newtodo,
      };
    });
  }

  handleDelete = id => {
    const newTodos = [...this.state.todos];
    newTodos.splice(id, 1)
    this.setState({ todos: newTodos });
  }

  renderItems = () => (
    this.state.todos.map((todo, index) => (
      <Items key={index} id={index} item={todo} handleDelete ={this.handleDelete} />
    ))
  )

  render() {
    return (
      <div className="todoContainer">
        <AddInputForm handleSubmit={this.handleSubmit} />
        {this.renderItems()}
      </div>
    )
  }
}

export default Todo;
