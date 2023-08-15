import React from 'react'

import {
  HeaderContainer,
  ButtonBox,
  ButtonAction,
  HeaderBox
} from '../../styles/ShoppingList/ShopHeader.style'

function Header() {
  return (
    <HeaderContainer>
      <HeaderBox>
        <ButtonBox>
          <ButtonAction>상의</ButtonAction>
        </ButtonBox>
        <ButtonBox>
          <ButtonAction>하의</ButtonAction>
        </ButtonBox>
        <ButtonBox>
          <ButtonAction>신발</ButtonAction>
        </ButtonBox>
        <ButtonBox>
          <ButtonAction>모자</ButtonAction>
        </ButtonBox>
        <ButtonBox>
          <ButtonAction>가방</ButtonAction>
        </ButtonBox>
        <ButtonBox>
          <ButtonAction>속옷</ButtonAction>
        </ButtonBox>
        <ButtonBox>
          <ButtonAction>아우터</ButtonAction>
        </ButtonBox>
        <ButtonBox>
          <ButtonAction>스커트</ButtonAction>
        </ButtonBox>
      </HeaderBox>
    </HeaderContainer>
  )
}

export default Header