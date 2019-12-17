import React, {Component} from 'react';

class Item extends Component {
  render() {
    const { imgPath, prdName, price } = this.props;

    return (
      <li>
        <a href="#none">
          <span className="link_thumb">
            <img src={require(`../../img/${imgPath}`)} className="img_g" alt="쇼핑찜 썸네일 이미지" />
          </span>
          <div className="info_thumb">
            <strong className="tit_prod"><span className="link_tit">{prdName}</span></strong>
            <span className="txt_price">
              <span className="num">{price}</span><span className="txt">원~</span>
            </span>
          </div>
        </a>
        <button type="button" className="btn_choice"><span className="ico_heart">쇼핑찜하기</span></button>
        <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
      </li>
    );
  };
};


export default Item;