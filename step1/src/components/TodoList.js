import React, {Component} from 'react';
import TodoItem from './TodoItem';
import '../css/TodoList.css';

class TodoList extends Component {
  render() {
    const {todos, onToggle, onRemove} = this.props;

    return(
      
      <ul className="list">
        <TodoItem text="test" />
        <TodoItem text="test2" />
      </ul>
    );
  }

}

export default TodoList;