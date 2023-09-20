import "../../styles/my_page/basket.css";

export default function Basket() {
  return (
    <div className="basketContainer">
      <div className="titleBox">
        <div className="title">장바구니</div>
        <button className="payButton">결제 하기</button>
      </div>
      <div className="thickDivider" />
      <div className="indexBox">
        <div className="indexProductInfo">상품 정보</div>
        <div className="indexPrice">상품 금액</div>
        <div className="indexCount">주문 수량</div>
        <div className="indexTotalPrice">주문 금액</div>
        <div className="indexSelect">선택</div>
      </div>
      <div className="thinDivider" />
      <BasketItem ifSelected={false} />
      <BasketItem ifSelected={true} />
      <div className="thinDivider" />
      <div className="bottomRow">
        <button className="deleteButton">선택 삭제</button>
      </div>
    </div>
  );
}

function BasketItem({ ifSelected }) {
  return (
    <div className="basketItemContainer">
      <div className="productInfoBox">
        <div className="image">
          <img src={require("../../imgs/my_page/product.png")} alt="product" />
        </div>
        <div className="description">Crown Silver Hoodie 후드티</div>
      </div>
      <div className="price">45,000</div>
      <div className="count">2</div>
      <div className="totalPrice">90,000</div>
      <div className="select">
        {ifSelected ? (
          <img src={require("../../imgs/my_page/selected.png")} alt="check" />
        ) : (
          <img
            src={require("../../imgs/my_page/not_selected.png")}
            alt="check"
          />
        )}
      </div>
    </div>
  );
}
