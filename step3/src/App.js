import React, {Component} from 'react';
import LatelyProduct from './components/dp_lately/lately_product';
import LatelyView from './components/dp_lately/lately_view';

class App extends Component {
  render() {
    return (
      <LatelyView>
        <LatelyProduct></LatelyProduct>
      </LatelyView>
    );
  };
;}

export default App;
