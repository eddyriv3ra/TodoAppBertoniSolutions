import React, { Component } from 'react';
import "./AddTodoForm.scss";

class AddTodoForm extends Component {

  state = {
    value: '',
  }

  handleChange = e => {
    this.setState({ value: e.target.value})
  }

  handleSubmit = e => {
    this.props.handleSubmit(this.state.value);
    this.setState({ value: '' })
    e.preventDefault()
  }

  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit}>
          <label>
            Add Todo:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add Todo" />
        </form>
      </div>
    )
  }
}

export default AddTodoForm;
