import React, {Component} from 'react';
import TodoListTemp from './components/Template';
import Form from'./components/Form';
import TodoList from'./components/TodoList';



class App extends Component {

  // 초기 상태 값

  id = 3; 


  render() {
    return (
      <TodoListTemp aa={<Form />}>
        <TodoList/>
      </TodoListTemp>
      
    );
  }
}

export default App;
