import React, {Component} from 'react';

class Footer extends Component {
  render() {

    return(
      <footer className="footer">
        <span className="todo-count">
          <strong>1</strong> item
        </span>
        <span className="filters">
          <button className="selected">All</button>
          <button className="">Active</button>
          <button className="">Completed</button>
        </span>
      </footer>
      
    );

  }

}

export default Footer;