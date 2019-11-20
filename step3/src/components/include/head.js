import React from 'react';
import '../../scss/common/common.scss';

const Header = () =>{
  return (
    <header id="header" className="head_sub_type visible">
      <div className="wrap_tit">
        <h1 className="tit">쇼핑 히스토리</h1>
        <a href="#none" className="btn_navi">
          <span>전체메뉴 열기</span>
        </a>
        <a href="#none" className="btn_srh">
          <span className="blind">검색페이지로 이동</span>
        </a>
        <a href="#none" className="btn_cart">
          <span className="cart_item_count">
            <span className="txt_a11y blind">장바구니</span>
            <strong className="num"></strong>
            <span className="txt_a11y blind">개 담겨있음</span>
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;