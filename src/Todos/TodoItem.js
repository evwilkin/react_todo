import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return <h1 key={this.props.todo.id}>{this.props.todo.title}</h1>;
  }
}

export default TodoItem;
