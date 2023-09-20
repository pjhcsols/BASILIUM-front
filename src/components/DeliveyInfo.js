import React, { useState } from "react";
import Axios from "axios";
import DeliveryModal from "./DeliveryModal";
import "../styles/shop_detail_list.css"

const api_key ="uqfDudUEwmf4owQGUhqk1g"
const DeliveryInfo = (props) => {

  return (
    <div className="deliveryContainer">
      <div className="shopListdetailContainer">
        <div className="title">주문 상세 내역 조회</div>
        <div className="thickDivider" />
        <div className="indexBox">
          <div className="indexProductInfo">상품 정보</div>
          <div className="indexShopDate">주문일자</div>
          <div className="indexInvoice">주문번호</div>
          <div className="indexShopDate">주문수량</div>
          <div className="indexPrice">상품 금액</div>
          <div className="indexStatus">주문 상태</div>
        </div>
        <div className="thinDivider" />
        <div className="shopItemDetailContainer">
          <div className="productInfoDetailBox">
            <div className="image">
              <img src={require("../imgs/my_page/product.png")} alt="product" />
            </div>
            <div className="description">{props.para.productName}</div>
          </div>
          <div className="shopDate">{props.para.orderDates}</div>
          <div className="t_invoice">{props.para.t_invoice}</div>
          <div className="orderQuantity">{props.para.orderQuantity}</div>
          <div className="price">{props.para.totalPrice}</div>

          <div className="status">
            <div className="deliveryStatus">{props.para.deliveryState}</div>
            <button className="searchDelivery" onClick={()=>postData(props.para.t_code,props.para.t_invoice)}>
              배송조회
            </button>
          </div>
        </div>

        <div className="thickDivider" />

        <div className="deliveryTruckContainer">
          <div className="title">배송 정보</div>
          <div className="thickDivider" />
          <Destination
            userName="김아무개"
            destinationName="대구광역시 북구 대학로 80"
            phoneNumber="010-1234-8770"
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;

function Destination(props) {
  return (
    <div className="destinationMainContainer">
      <div className="userNameContainer">
        <div className="nameTitle">이름</div>
        <div className="userName">{props.userName}</div>
      </div>

      <div className="thinDivider" />

      <div className="destinationContainer">
        <div className="destinationTitle">배송지 정보</div>
        <div className="destinationName">{props.destinationName}</div>
      </div>

      <div className="thinDivider" />

      <div className="phoneNumberContainer">
        <div className="phoneNumberTitle">연락처</div>
        <div className="phoneNumberName">{props.phoneNumber}</div>
      </div>

      <div className="thickDivider" />
    </div>
  );
}


async function postData(code,invoice) {
  try {
    const response = await Axios.post('http://info.sweettracker.co.kr/api/v1/trackingInfo/3',{
       "t_invoice": {invoice},
       "t_code": {code},
       "t_key": {api_key},
      
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}