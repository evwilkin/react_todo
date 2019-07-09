import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div>
        <input
        type="checkbox"
        onChange={this.props.updateCompleted.bind(this, this.props.todo.id)}
        />
        <h1
          key={this.props.todo.id}
          style={{textDecoration: this.props.todo.completed ? 'line-through' : 'none'}}
        >
          {this.props.todo.title}
        </h1>
      </div>
    );
  }
}

export default TodoItem;
