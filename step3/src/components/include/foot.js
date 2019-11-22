import React from 'react';

const Footer = () =>{
  return (
    <div id="footer">
		<div className="footer_wrap">
			<div className="foot_btn">
				{/* 로그인 전 */}
				<ul className="tbl_type">
				<li><a href="#none" className="btn_type">고객센터</a></li>
				<li><a href="#none" className="btn_type">로그인</a></li>
				<li><a href="#none" className="btn_type">APP설치</a></li>
				<li><a href="#none" className="btn_type">PC버전</a></li>
				</ul>
				{/*  //로그인 전 */}
			</div>
			<div className="foot_policy">
				<h3 className="blind">CJOshopping 사업자 연락정보 및 약관</h3>
				<address className="foot_contact">
					<p>(주)씨제이오쇼핑 대표이사 허민회</p>
					<p>주소 : 06761 서울시 서초구 과천대로 870-13</p>
					<p>
						<span>호스팅제공자 : (주)CJ오쇼핑</span><span>사업자등록번호 : 106-81-51510</span>
					</p>
					<p>
						<span>통신판매업신고 : 서초 제 000015호</span><span>개인정보관리책임자 : IT담당 양희영</span>
					</p>
					<p>
						<span>이메일 : webmaster@cjmall.com</span><span>고객센터 : <a href="#none" className="lk_type">1644-2525</a></span>
					</p>
				</address>
				<ul className="foot_terms">
				<li><a href="#none" className="lk_type">회사소개</a></li>
				<li><a href="#none" className="lk_type">사업자정보확인</a></li>
				<li><a href="#none" className="lk_type">이용약관</a></li>
				<li><a href="#none" className="lk_type"><strong>개인정보처리방침</strong></a></li>
				<li><a href="#none" className="lk_type">청소년보호정책</a></li>
				<li><a href="#none" className="lk_type">법적고지</a></li>
				<li><a href="#none" className="lk_type">하나은행구매안전서비스</a></li>
				<li><a href="#none" className="lk_type">오픈소스라이센스고지</a></li>
				</ul>
				<small className="copyright">Copyright(C) CJ O Shopping All Rights Reserved.</small>
			</div>
		</div>
		{/* 하단 유틸 바 */}
		<div className="wrap_bar_util">
			<ul className="bar_util">
				<li><a href="#none" className="btn_home"><span>홈으로 가기</span></a></li>
				{/* [D] 뒤로가기 없는 경우 btn_history_back요소에 is_none 클래스 추가 */}
				<li><button type="button" className="btn_history_back"><span>뒤로 가기</span></button></li>
				<li><a href="#none" role="button" className="btn_menu"><span>메뉴</span></a></li>
				<li><a href="#none" id="go_myzone" className="btn_myzone"><span>마이존으로 가기</span></a></li>
				<li>
					{/* [D] 최근 본 상품이 있는 경우 .btn_latest_item요소에 is_see 클래스 추가 */}
					<a href="#none" className="btn_latest_item is_see" title="최근 본 상품으로 가기">
						{/* [D] img 태그의 width/height 값 23으로 변경 */}
						<span><img src={require("../../img/@temp_goods.jpg")} width="23" height="23" alt=""/></span>
					</a>
				</li>
			</ul>
		</div>
		{/*// 하단 유틸 바 */}

</div>
  );
};

export default Footer;