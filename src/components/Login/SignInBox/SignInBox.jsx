import React, { useEffect, useRef, useState } from 'react';
import BasiliumAPI from '../../../utils/Axios';
import { useNavigate } from 'react-router-dom';

import * as S from '../LoginForm.style'
import Loading from '../../../pages/Loading/Loading';
import APILoginbox from '../APILoginBox/APILoginbox';

function SignBox() {
  /* States Varaible */
  const navigate = useNavigate();
  
  const [email, setemail] = useState('');
  const [pw, setpw] = useState('');
  const [IsLoading, setIsLoading] = useState(false);

  const emailref = useRef(null);
  const pwref = useRef(null);

  /* 
      value : Reference on Input value 
      onCallback : set function to input on State variable
  */

  const onChangeSlot = (e, onCallback) => {
    console.log(e);
    const InputValue = e.current.value;
    onCallback((prevValue)=>{
      return InputValue;
    });
  }

  /* To make Input content by using forEach grammer */
  function InputContent(){
    let list = [];
    const RefList = [emailref, pwref];
    const StateList = [setemail, setpw];

    const InputContentInfo = [
      {
          'id': 0,
          'type': 'text',
          'name': 'email',
          'value': '',
          'placeholder': '이메일을 입력해주세요',
          'title': '이메일'
      },
      {
          'id': 1,
          'type': 'password',
          'name': 'password',
          'value': '',
          'placeholder': '비밀번호를 입력해주세요',
          'title': '비밀번호'
      },
    ];
    InputContentInfo.forEach((item)=>{
      list.push(
      <S.InputBox>
          <p className="title">{item.title}</p>
          <S.InputBlock
              type={item.type}
              name={item.name}
              value={item.value}
              placeholder={item.placeholder}
              ref={RefList[item.id]}
              onChange={(e) => onChangeSlot(e, StateList[item.id])}
          />
      </S.InputBox>
      )
    });
    return list;
  }

  const onClickSignIn = (e) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', pw);

    BasiliumAPI.post('v1/signup', formData)
      .then(data => {
        setIsLoading(false);
        console.log(data);
      })
      .error(err => {
        console.log('This is SignInBox error <'+err+'>');
        navigate('/login');
      });
  };

  useEffect(()=>{
    console.log('Loading...');
  }, [IsLoading]);

  return (
    <>
      {IsLoading ?
        <Loading></Loading>
            :    
        <S.Wrapper>
            <S.InputContainer>
            {
              InputContent()
            }
            </S.InputContainer>
            <S.ButtonBox>
                <S.CheckButton onClick={onClickSignIn}>
                    <span className="signup-button-span">
                        로그인
                    </span>
                </S.CheckButton>
                <S.AnotherAccountBtn href='/login' />
                <APILoginbox />
            </S.ButtonBox>
        </S.Wrapper>
      }
    </>
  )
}

export default SignBox