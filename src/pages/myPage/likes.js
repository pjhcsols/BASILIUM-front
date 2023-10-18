import "../../styles/my_page/likes.css";
import { useState, useEffect } from "react";
import { baseURL } from "./constatns";

export default function Likes() {
  const [likesIdList, setLikesIdList] = useState([]);
  useEffect(() => {
    //userId로 장바구니 id목록 가져오기
    fetch(`${baseURL}/like/likeInfos?userId=${"aassdd123"}`)
      .then((res) => res.json())
      .then((res) => {
        setLikesIdList(
          res.map((item) => ({
            id: item.id,
            productId: item.productId,
          }))
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const [likesList, setLikesList] = useState([]);
  useEffect(() => {
    fetch(
      `${baseURL}/products/productsInfo?values=${likesIdList
        .map((item) => item.productId)
        .join(",")}`
    )
      .then((res) => res.json())
      .then((res) => {
        setLikesList(
          res.map((item) => ({
            productId: item.productId,
            productCategoryId: item.productCategoryId,
            productName: item.productName,
            productPrice: item.productPrice,
            productDesc: item.productDesc,
          }))
        );
      });
  }, [likesIdList]);

  const renderLikesList = () => {
    let likesRow = [];
    for (let i = 0; i < likesList.length; i += 4) {
      likesRow.push(
        <div className="likesItemRow" key={i + 1}>
          {likesList.slice(i, i + 4).map((item) => (
            <LikesItem item={item} key={item.productId} />
          ))}
        </div>
      );
    }
    return likesRow;
  };

  return (
    <div className="likesContainer">
      <div className="titleBox">
        <img
          className="heartIcon"
          src={require("../../imgs/my_page/heart.png")}
          alt="product"
        />
        <div className="title">좋아요</div>
      </div>
      <div className="thickDivider" />
      {renderLikesList()}
    </div>
  );
}

function LikesItem({ item }) {
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
    <div className="likesItemContainer">
      <div className="imageBox">
        <img src={imageSrc} alt="product" className="image" />
        <img
          className="heart"
          src={require("../../imgs/my_page/heart.png")}
          alt="product"
        />
      </div>
      <div className="description">{item.productName}</div>
      <div className="price">{item.productPrice}</div>
    </div>
  );
}
