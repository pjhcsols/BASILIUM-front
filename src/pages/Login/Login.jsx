import React, { useEffect, useState } from 'react'

import SignInBox from '../../components/Login/SignInBox/SignInBox'
import SignupBox from '../../components/Login/SignupBox/SignupBox'

import * as S from './Login.style'

function Login() {
  const [IsLogindom, setIsLogindom] = useState(true);

  const onClickSignIn = (e) => {
    setIsLogindom(true);
  }

  const onClickSignUp = (e) => {
    setIsLogindom(false);
  }

  useEffect(()=>{
    console.log('Change the dom');
  }, [IsLogindom]);

  return (
    <>
      <S.Wrapper>
        <S.LeftSideContainer />
        <S.RightSideContainer>
          {
            IsLogindom ?
            <SignInBox />
            :
            <SignupBox />
          }
        </S.RightSideContainer>
      </S.Wrapper>
    </>
  )
}

export default Login