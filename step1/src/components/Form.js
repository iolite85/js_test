import React from 'react';
import '../css/Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input  value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <button className="btn_create" onClick={onCreate}>추가</button>
    </div>
  );
};

export default Form;