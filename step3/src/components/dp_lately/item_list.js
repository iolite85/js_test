import React, {Component} from 'react';
import Item from './item';

class ItemList extends Component {
  render() {
    const { date, items } = this.props;
    
    return(
      <>
      <div className="item_lately">
        <span className="cont_date2">12.12</span>
        <ul className="list_chu_prod">
          <Item imgPath="thumb_240x240.jpg" prdName="[PALLA] 에이백 A-bag 라지" price="138,000"/>
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
      <div className="item_lately">
        <span className="cont_date2">12.10</span>
        <ul className="list_chu_prod">
          <li>
            <a href="#none">
              <span className="link_thumb">
                <img src={require("../../img/thumb_240x240.jpg")} className="img_g" alt="쇼핑찜 썸네일 이미지" />
              </span>
              <div className="info_thumb">
                <strong className="tit_prod"><span className="link_tit">[에몬스홈] 데이브 1인 소파</span></strong>
                <span className="txt_price">
                  <span className="num">178,000</span><span className="txt">원~</span>
                </span>
              </div>
            </a>
            <button type="button" className="btn_choice"><span className="ico_heart">쇼핑찜하기</span></button>
            <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
          </li>
          <li className="sold_out">
            <a href="#none">
              <span className="link_thumb">
                <img src={require("../../img/thumb_240x240.jpg")} className="img_g" alt="쇼핑찜 썸네일 이미지" />
                <span className="frame_g">매진</span>
              </span>
              <div className="info_thumb">
                <strong className="tit_prod"><span className="link_tit">[에몬스홈] 테일러 패브릭 카우치 수납 소파베드</span></strong>
                <span className="txt_price">
                  <span className="num">329,000</span><span className="txt">원~</span>
                </span>
              </div>
            </a>
            <button type="button" className="btn_choice"><span className="ico_heart">쇼핑찜하기</span></button>
            <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
          </li>
          <li className="sell_end">
            <a href="#none">
              <span className="link_thumb">
                <img src={require("../../img/thumb_240x240.jpg")} className="img_g" alt="쇼핑찜 썸네일 이미지" />
                <span className="frame_g">판매<br />종료</span>
              </span>
              <div className="info_thumb">
                <strong className="tit_prod"><span className="link_tit">[에몬스홈] 테일러 패브릭 카우치 수납 소파베드</span></strong>
              </div>
            </a>
            <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
          </li>
          <li className="lately_chk">
            <a href="#none">
              <span className="ico_mark">검색</span>
              <strong className="txt_chk"><span className="link_tit">패브릭 소파</span></strong>
            </a>
            <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
          </li>
        </ul>
      </div>

      <div className="item_lately">
        <span className="cont_date">12.08</span>
        <ul className="list_chu_prod">
          <li className="lately_chk">
            <a href="#none">
              <span className="ico_mark">기획전</span>
              <strong className="txt_chk"><span className="link_tit">백화점 네파 인기 BEST</span></strong>
            </a>
            <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
          </li>
          <li className="lately_chk">
              <a href="#none">
                <span className="ico_video">동영상</span>
                <strong className="txt_chk"><span className="link_tit">백화점 네파 인기 BEST</span></strong>
              </a>
              <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
            </li>
          <li>
            <a href="#none">
              <span className="link_thumb">
                <img src={require("../../img/thumb_240x240.jpg")} className="img_g" alt="쇼핑찜 썸네일 이미지" />
              </span>
              <div className="info_thumb">
                <strong className="tit_prod"><span className="link_tit">[LGU+] 갤럭시 S7 엣지</span></strong>
                <span className="txt_sort">단말기 가격</span>
                <span className="txt_price">
                  <span className="num">100,005,000</span><span className="txt">원</span>
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
                <strong className="tit_prod"><span className="link_tit">[LG전자렌탈] LG 퓨리케어 직수 슬림 냉온정수기 W...</span></strong>
                <span className="txt_sort">월 렌탈료</span>
                <span className="txt_price">
                  <span className="num">35,000</span><span className="txt">원~</span>
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
                <strong className="tit_prod"><span className="link_tit">[LGU+] 갤럭시 S7 엣지</span></strong>
                <span className="txt_sort">상담신청상품</span>
              </div>
            </a>
            <button type="button" className="btn_choice"><span className="ico_heart">쇼핑찜하기</span></button>
            <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
          </li>
        </ul>
      </div>
      <div className="item_lately">
        <span className="cont_date">12.07</span>
        <ul className="list_chu_prod">
          <li className="lately_chk">
            <a href="#none">
              <span className="ico_mark">검색</span>
              {/*  [D] 상세내용이 길어지는 경우 최대 2줄까지 노출되며 그 이상은 말줄임표 부탁드립니다 */}
              <strong className="txt_chk"><span className="link_tit">패브릭 소파</span></strong>
            </a>
            <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
          </li>
          <li className="lately_chk">
            <a href="#none">
              <span className="ico_mark">기획전</span>
              <strong className="txt_chk"><span className="link_tit">백화점 네파 인기 BEST</span></strong>
            </a>
            <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
          </li>
          <li className="lately_chk">
            <a href="#none">
              <span className="ico_mark">카테고리</span>
              <strong className="txt_chk"><span className="link_tit">여성의류 > 원피스</span></strong>
            </a>
            <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
          </li>
          <li className="lately_chk">
            <a href="#none">
              <span className="ico_mark">임직원몰</span>
              <strong className="txt_chk"><span className="link_tit">CJ임직원 트랜디샵 NEW</span></strong>
            </a>
            <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
          </li>
          <li className="lately_chk">
            <a href="#none">
              <span className="ico_mark">이벤트</span>
              <strong className="txt_chk"><span className="link_tit">CJmall에서 식품사면 20% 적립금 식품가계부 CJmall에서 식품사면 20% 적립금 식품가계부 CJmall에서 식품사면 20% 적립금 식품가계부</span></strong>
            </a>
            <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
          </li>
        </ul>
      </div>
      <div className="item_lately">
        <span className="cont_date">12.06</span>
        <ul className="list_chu_prod">
          <li className="lately_chk">
            <a href="#none">
              <span className="ico_mark">이벤트</span>
              <strong className="txt_chk"><span className="link_tit">CJmall에서 식품사면 20% 적립금 식품가계부 CJmall에서 식품사면 20% 적립금 식품가계부 CJmall에서 식품사면 20% 적립금 식품가계부</span></strong>
            </a>
            <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
          </li>
          <li className="lately_chk">
            <a href="#none">
              <span className="ico_video">동영상</span>
              <strong className="txt_chk"><span className="link_tit">백화점 네파 인기 BEST</span></strong>
            </a>
            <button type="button" className="btn_del"><span className="ic2_14">삭제하기</span></button>
          </li>
        </ul>
      </div>
      </>
    );
  };
};


export default ItemList;