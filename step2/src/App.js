import React, {Component} from 'react';
import Header from './todo/Header';
import Main from './todo/Main';
import Footer from './todo/Footer';
import './css/todo.css';

class App extends Component {
  render(){
    return (
      <div className="todoapp">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
