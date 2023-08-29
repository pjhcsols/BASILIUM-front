import "../../styles/my_page/likes.css";

export default function Likes() {
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

      <div className="likesItemRow">
        <LikesItem />
        <LikesItem />
        <LikesItem />
        <LikesItem />
      </div>

      <div className="likesItemRow">
        <LikesItem />
        <LikesItem />
        <LikesItem />
        <LikesItem />
      </div>
    </div>
  );
}

function LikesItem() {
  return (
    <div className="likesItemContainer">
      <div className="imageBox">
        <div className="image">
          <img src={require("../../imgs/my_page/product.png")} alt="product" />
        </div>
        <img
          className="heart"
          src={require("../../imgs/my_page/heart.png")}
          alt="product"
        />
      </div>
      <div className="description">클래식 B 주르핏 티셔츠</div>
      <div className="price">45000원</div>
    </div>
  );
}
