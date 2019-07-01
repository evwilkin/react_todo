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

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
