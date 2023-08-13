import React, { useState, useEffect } from "react";
import "../styles/sign_in.css";
import { useNavigate } from "react-router-dom";
const Sign_in = () => {
  const [inputs, setInputs] = useState({
    email: "",
    pwd: "",
  });

  const { email, pwd } = inputs;
  const navigate = useNavigate();
 
  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  const signUp = () => {
    navigate("/sign_up");
  };

  const Login = () => {};

  return (
    <div className="body">
      <div className="mainDiv">
        <p className="mainLogo">BASILIUM</p>
        <p className="subLogo">Basilium of the King and Queen casual & street brand</p>
        <div className="loginBox">
          <div className="btnBox">
            <div className="signInArea">
              <p id="txt" style={{ fontSize: 16 }}>
                로그인
              </p>
            </div>

            <div className="signUpArea">
              <button className="signUpBtn" onClick={signUp}>
                <p style={{ fontSize: 16 }}>회원가입</p>
              </button>
            </div>
          </div>

          <div className="qryBox">
            <div className="emailSet">
              <p className="emailTxt">이메일</p>
              <div className="emailBox">
                <div className="emailImgBox">
                  <img className="emailimg" />
                </div>
                <input
                  className="emailInp"
                  type="text"
                  id="email"
                  value={email}
                  onChange={onChange}
                  placeholder="이메일을 입력해주세요."
                />
              </div>
            </div>

            <div className="pwdSet">
              <div>
                <p className="pwdTxt">비밀번호</p>
                <button className="pwdReset">비밀번호 재설정</button>
              </div>

              <div className="pwdBox">
                <div className="pwdImgBox"></div>
                <input
                  className="pwdInp"
                  type="text"
                  id="pwd"
                  value={pwd}
                  onChange={onChange}
                  placeholder="비밀번호를 입력해주세요."
                />
                <div className="pwdseeBox"></div>
              </div>
            </div>

            <div className="errorDiv">
              <p className="errorTxt">※이메일이나 비밀번호가 틀립니다.</p>
            </div>

            <button className="loginBtn" onClick={Login}>
              <p className="loginTxt" style={{ fontSize: 15 }}>
                로그인
              </p>
            </button>

            <div className="apiLogin">
              <p>다른 계정으로 로그인하기</p>
              <div className="apiSet">
                <div className="kakaoLogin">
                  <button className="kakaoBtn"></button>
                  <p style={{ fontSize: 13 }}>카카오</p>
                </div>

                <div className="naverLogin">
                  <button className="naverBtn"></button>
                  <p style={{ fontSize: 13 }}>네이버</p>
                </div>

                <div className="googleLogin">
                  <button className="googleBtn"></button>
                  <p style={{ fontSize: 13 }}>구글</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign_in;
