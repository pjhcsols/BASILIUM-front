import React, { useState, useEffect } from "react";
import "../styles/sign_up.css";
import { useNavigate } from "react-router-dom";

const Sign_up = () => {
  const [inputs, setInputs] = useState({
    phoneNum: "",
    email: "",
    pwd: "",
    pwdchk: "",
    name: "",
  });
  const { phoneNum, email, pwd, pwdchk, name } = inputs;
  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  const navigate = useNavigate();
  const signIn = () => {
    navigate("/sign_In");
  };

  const signUpSend = () => {};

  return (
    <div className="body2">
      <div className="mainDiv">
        <p className="mainLogo">BASILIUM</p>
        <p className="subLogo">
          Basilium of the King and Queen casual & street brand
        </p>
        <div className="loginBox">
          <div className="btnBox2">
            <div className="signInArea2">
              <button className="signInBtn2" onClick={signIn}>
                <p style={{ fontSize: 16 }}>로그인</p>
              </button>
            </div>

            <div className="signUpArea2">
              <p id="txt" style={{ fontSize: 16 }}>
                회원가입
              </p>
            </div>
          </div>

          <div className="qryBox2">
            <div className="phoneSet">
              <p className="phoneTxt">전화번호</p>
              <div className="phoneBox">
                <div className="phoneImgBox">
                  <img className="phoneimg" />
                </div>
                <input
                  className="phoneInp"
                  type="text"
                  id="phoneNum"
                  value={phoneNum}
                  onChange={onChange}
                  placeholder="전화번호를 입력해주세요."
                />
              </div>
            </div>
            <div className="emailSet2">

              <div>
                <p className="emailTxt">이메일</p>
                <button className="identification">본인인증</button>
              </div>

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

            <div className="pwdSet2">
              <div>
                <p className="pwdTxt">비밀번호</p>
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

            <div className="pwdchkSet">
              <div>
                <p className="pwdchkTxt">비밀번호 확인</p>
              </div>

              <div className="pwdchkBox">
                <div className="pwdchkImgBox"></div>
                <input
                  className="pwdchkInp"
                  type="text"
                  id="pwdchk"
                  value={pwdchk}
                  onChange={onChange}
                  placeholder="비밀번호를 확인해주세요."
                />
                <div className="pwdchkseeBox"></div>
              </div>
            </div>

            <div className="nameSet">
              <p className="nameTxt">이름</p>
              <div className="nameBox">
                <div className="nameImgBox">
                  <img className="nameimg" />
                </div>
                <input
                  className="nameInp"
                  type="text"
                  id="name"
                  value={name}
                  onChange={onChange}
                  placeholder="이름을 입력해주세요."
                />
              </div>
            </div>

            <button className="signUpSendBtn" onClick={signUpSend}>
              <p className="signUpTxt" style={{ fontSize: 15 }}>
                회원가입
              </p>
            </button>

            <div className="apiLogin">
              <p>다른 계정으로 회원가입하기</p>
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

export default Sign_up;
