import React from 'react';
import Todo from './components//Todo/Todo';
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">Todos</h1>
      <p className="info">Click on the todo to mark as done</p>
      <Todo />
    </div>
  );
}

export default App;
