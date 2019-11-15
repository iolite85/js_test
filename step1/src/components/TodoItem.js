import React, {Component} from 'react';
import '../css/TodoItem.css';

class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return(
      <li className="item" onClick={() => onToggle(id)}>
        <span className="remove" onClick={(e) => {
          e.stopPropagation();
          onRemove(id)
        }}>x</span>
        <span className={`text ${checked ? ' checked' : ''}`}>{text}</span>
        {
          checked && (<span className="check-mark">&#x2713;</span>)
        }
      </li>
    );

  }

}

export default TodoItem;