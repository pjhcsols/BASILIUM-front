import "../../styles/my_page/shop_list.css";

import { useState, useEffect } from "react";
import { baseURL } from "./constatns";

export default function ShopLists() {
  const [shopIdList, setShopIdList] = useState([]);
  useEffect(() => {
    //userId로 장바구니 id목록 가져오기
    fetch(
      `${baseURL}/purchaseTransaction/transactionInfos?userId=${"aassdd123"}`
    )
      .then((res) => res.json())
      .then((res) => {
        setShopIdList(
          res.map((item) => ({
            transactionId: item.transactionId,
            userId: item.userId,
            productId: item.productId,
            totalPrice: item.totalPrice,
            paymentType: item.paymentType,
            purchaseTime: item.purchaseTime,
          }))
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const [shopList, setShopList] = useState([]);
  useEffect(() => {
    fetch(
      `${baseURL}/products/productsInfo?values=${shopIdList
        .map((item) => item.productId)
        .join(",")}`
    )
      .then((res) => res.json())
      .then((res) => {
        setShopList(
          res.map((item) => ({
            productId: item.productId,
            productCategoryId: item.productCategoryId,
            productName: item.productName,
            productPrice: item.productPrice,
            productDesc: item.productDesc,
            purchaseTime: shopIdList.find(
              (shopItem) => shopItem.productId === item.productId
            ).purchaseTime,
            totalPrice: shopIdList.find(
              (shopItem) => shopItem.productId === item.productId
            ).totalPrice,
          }))
        );
      });
  }, [shopIdList]);

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

      {shopList.map((item, ind) => (
        <ShopItem key={ind} item={item} />
      ))}
    </div>
  );
}

function ShopItem({ item }) {
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
    <div className="shopItemContainer">
      <div className="productInfoBox">
        <img src={imageSrc} alt="product" className="image" />
        <div className="description">{item.productName}</div>
      </div>
      <div className="shopDate">{parseDate(item.purchaseTime)}</div>
      <div className="price">{item.totalPrice}</div>
      <div className="status">배송중</div>
    </div>
  );
}

const parseDate = (date) => {
  const year = date.substring(2, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  return `${year}.${month}.${day}`;
};
