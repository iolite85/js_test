import React, {Component} from 'react';
import '../../scss/lately.scss';

class LatelyProduct extends Component {
  render() {
    return(
      <div className="wrap_lately">
        <div className="box_option">
          <span className="piece_total"><span className="num">100</span>개</span>
          <div className="option_area">
            <span className="u_chkbx chkbx_only_prd">
              <input type="checkbox" id="ckbx1" /><label htmlFor="ckbx1">상품만 보기</label>
            </span>
            <button type="button" className="btn_del">전체삭제</button>
          </div>
        </div>
        <div className="lately_product">
          <div className="item_lately">
            <span className="cont_date2">12.12</span>
            <ul className="list_chu_prod">
              <li>
                <a href="#none">
                  <span className="link_thumb">
                    <img src={require("../../img/thumb_240x240.jpg")} className="img_g" alt="쇼핑찜 썸네일 이미지" />
                  </span>
                  <div className="info_thumb">
                    <strong className="tit_prod"><span className="link_tit">[PALLA] 에이백 A-bag 라지</span></strong>
                    <span className="txt_price">
                      <span className="num">138,000</span><span className="txt">원~</span>
                    </span>
                  </div>
                </a>
                <button type="button" className="btn_choice"><span className="ico_heart">쇼핑찜하기</span></button>
                <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
              </li>
              <li>
                <a href="#none">
                  <span className="link_thumb">
                    <img src={require("../../img/thumb_240x240.jpg")} className="img_g" alt="쇼핑찜 썸네일 이미지" />
                  </span>
                  <div className="info_thumb">
                    <strong className="tit_prod"><span className="link_tit">에스쁘아 패뷸러스 블러쉬 1호 딜리셔스</span></strong>
                    <span className="txt_price">
                      <span className="num">15,040</span><span className="txt">원~</span>
                    </span>
                  </div>
                </a>
                <button type="button" className="btn_choice selected"><span className="ico_heart">쇼핑찜하기</span></button>
                <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
};

export default LatelyProduct;