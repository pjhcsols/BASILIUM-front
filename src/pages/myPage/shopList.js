import "../../styles/my_page/shop_list.css";

export default function ShopList() {
  return (
    <div className="shopListContainer">
      <div className="title">주문 내역 조회</div>
      <div className="thickDivider" />
      <div className="indexBox">
        <div className="indexProductInfo">상품 정보</div>
        <div className="indexShopDate">주문일자</div>
        <div className="indexPrice">상품 금액</div>
        <div className="indexStatus">주문 상태</div>
      </div>
      <div className="thinDivider" />
      <ShopItem />
    </div>
  );
}

function ShopItem() {
  return (
    <div className="shopItemContainer">
      <div className="productInfoBox">
        <div className="image">
          <img src={require("../../imgs/my_page/product.png")} alt="product" />
        </div>
        <div className="description">Crown Silver Hoodie 후드티</div>
      </div>
      <div className="shopDate">23.07.31</div>
      <div className="price">45,000</div>
      <div className="status">배송중</div>
    </div>
  );
}
