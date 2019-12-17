import React, {Component} from 'react';
import ItemList from './item_list';
import '../../scss/lately.scss';

class LatelyProduct extends Component {
  render() {
    const { items } = this.props;
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
          <ItemList items={items} />
        </div>
      </div>
    );
  };
};

export default LatelyProduct;