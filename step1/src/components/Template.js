import React from 'react';
import '../css/Template.css';


const TodoListTemp = ({aa, children}) => { // 모든 컴포넌트에는 props라는 객체가 존재하고 각 props에는 children이라는 프로퍼티가 기본적으로 존재합니다.
    
    return(
        <div className="tmpWrap">
            <h2 className="title">오늘 할일</h2>
            <div className="formWrap">
                {aa}
            </div>
            <div className="ListWrap">
                {children}
            </div>
        </div>
    );
};

export default TodoListTemp;