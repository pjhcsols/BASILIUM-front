import styled from "styled-components";
import naver from '../../../assets/LoginPage/naver_logo.png';
import google from '../../../assets/LoginPage/google_logo.png';
import kakao from '../../../assets/LoginPage/kakao_logo.png';

/* API Logins Buttons Division */
export const APILoginBtnBox = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
`

/* API Logins Btn Objects */
export const APILoginBox = styled.div`
    width: 10%;
    height: 70%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    .api-login-title{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 13px;
        font-weight: lighter;
        color: black;
    }
`

export const Kakao = styled.div`
    width: 100%;
    height: 80%;
    background-image: url(${kakao});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    border-radius: 10px 10px 10px 10px;
`

export const Naver = styled.div`
    width: 100%;
    height: 80%;
    background-image: url(${naver});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    border-radius: 10px 10px 10px 10px;
`

export const Google = styled.div`
    width: 100%;
    height: 80%;
    background-image: url(${google});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    border-radius: 10px 10px 10px 10px;
`