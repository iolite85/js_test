import React from 'react';
import Header from '../include/head';
import Footer from '../include/foot';
import '../../scss/common/layout.scss';


const LatelyView = ({children}) => {
  return(
    <div id="wrap">
      <Header></Header>
      <div id="container">
        <div className="content">
          {children}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LatelyView;