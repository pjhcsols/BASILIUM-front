import "../../styles/my_page/my_page.css";
import AppBar from "./appbar";
import Basket from "./basket";
import Likes from "./likes";
import ShopList from "./shopList";

export default function MyPage() {
  return (
    <div className="container">
      <AppBar />
      <ShopList />
      <Basket />
      <Likes />
    </div>
  );
}
