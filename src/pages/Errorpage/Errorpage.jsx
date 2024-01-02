import React from 'react'
import * as S from './Errorpage.style'
import { useNavigate } from 'react-router-dom'

function Errorpage() {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate('/');
  }
  return (
    <S.ErrorContainer>
      <span className="error-text" size="35px" weight="bold">
        Basilium Error Page
      </span>
      <span className="error-text" size="20px">
        빠르게 해결하겠습니다.
      </span>
      <span className="error-text" size="20px">
        Help - basilium@gmail.com
      </span>
      <S.Errorbtn onClick={onClickBtn}>
        RELOAD
      </S.Errorbtn>
    </S.ErrorContainer>
  )
}

export default Errorpage