import "../../styles/my_page/appbar.css";

export default function AppBar() {
  return (
    <div className="appBarContainer">
      <div className="title">My Page</div>
      <div className="innerBox">
        <div className="profileImage">
          <img src={require("../../imgs/my_page/user.png")} alt="profile"></img>
        </div>
        <div className="profileBox">
          <div className="nickName">User’s Nickname</div>
          <div className="email">sample@naver.com</div>
          <div className="name">김아무개</div>
        </div>
        <button className="button">프로필 편집</button>
        <div style={{ width: 34 }} />
        <button className="button">작성한 후기 보기</button>
      </div>
    </div>
  );
}
