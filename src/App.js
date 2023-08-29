import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Sign_in from "./pages/Sign_in";
import Sign_up from "./pages/Sign_up";
import MyPage from "./pages/myPage/myPage";
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Main</Link> |<Link to="/sign_in">Sign_in</Link> |
        <Link to="/sign_up">Sign_up</Link>
      </nav>

      {/*Routers*/}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign_in" element={<Sign_in />} />
        <Route path="/sign_up" element={<Sign_up />} />
        <Route path="/my_page" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
