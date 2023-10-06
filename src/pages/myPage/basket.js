import { useState, useEffect } from "react";
import "../../styles/my_page/basket.css";

import { baseURL } from "./constatns";

export default function Basket() {
  const [basketIdList, setBasketIdList] = useState([]);

  useEffect(() => {
    //userId로 장바구니 id목록 가져오기
    fetch(`${baseURL}/shoppingCart/shoppingCartInfos?userId=${"aassdd123"}`)
      .then((res) => res.json())
      .then((res) => {
        setBasketIdList(
          res.map((item) => ({
            orderId: item.orderId,
            productId: item.productId,
            amount: item.amount,
          }))
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //[1,2,3] 리스트를 문자열 1,2,3으로

  const [basketList, setBasketList] = useState([]);
  useEffect(() => {
    fetch(
      `${baseURL}/products/productsInfo?values=${basketIdList
        .map((item) => item.productId)
        .join(",")}`
    )
      .then((res) => res.json())
      .then((res) => {
        setBasketList(
          res.map((item) => ({
            productId: item.productId,
            productCategoryId: item.productCategoryId,
            productName: item.productName,
            productPrice: item.productPrice,
            productDesc: item.productDesc,
            amount: basketIdList.find(
              (basketItem) => basketItem.productId === item.productId
            ).amount,
            ifSelected: false,
          }))
        );
      });
  }, [basketIdList]);

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
      {
        //basketList.map((item) => <BasketItem item={item} />)
        basketList.map((item) => (
          <BasketItem key={item.productId} item={item} />
        ))
      }
      <div className="thinDivider" />
      <div className="bottomRow">
        <button className="deleteButton">선택 삭제</button>
      </div>
    </div>
  );
}

export function BasketItem({ item }) {
  useEffect(() => {
    fetch(`${baseURL}/products/downloadProductPhotos/${item.productId}?num=1`, {
      responseType: "arraybuffer",
    })
      .then((res) => res.blob())
      .then((res) => {
        var file = new File([res], res.type);
        onImageDownload(file);
      });
    // .then((res) => res.json())
    // .then((res) => {});
  }, [item.productId]);

  const [imageSrc, setImageSrc] = useState(null);

  const onImageDownload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImageSrc(reader.result || null); // 파일의 컨텐츠
    };
  };

  return (
    <div className="basketItemContainer">
      <div className="productInfoBox">
        <img src={imageSrc} alt="product" className="image" />
        <div className="description">{item.productName}</div>
      </div>
      <div className="price">{item.productPrice}</div>
      <div className="count">{item.amount}</div>
      <div className="totalPrice">{item.productPrice * item.amount}</div>
      <div className="select">
        {item.ifSelected ? (
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
