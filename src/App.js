import React, { Component } from 'react';
import './App.css';
import Todos from './Todos/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take Jolie on a walk",
        completed: false
      },
      {
        id: 2,
        title: "Buy groceries",
        completed: false
      },
      {
        id: 3,
        title: "Take out the recycling",
        completed: false
      }
    ]
  };

  updateCompleted = (id) => {
    this.setState({todos: this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} updateCompleted={this.updateCompleted} />
      </div>
    );
  }
}

export default App;
