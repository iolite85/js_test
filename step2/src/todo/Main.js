import React, {Component} from 'react';

class Main extends Component {
  render() {

    return(
      <section className="main">
        <input type="checkbox" id="toggle-all" className="toggle-all" />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          <li>
            <input type="checkbox" className="toggle" />
            <label>test</label>
            <button className="destroy"></button>
          </li>
        </ul>
      </section>
      
    );

  }

}

export default Main;