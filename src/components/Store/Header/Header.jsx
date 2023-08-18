import React from 'react'

import {
  HeaderContainer,
  ButtonBox,
  ButtonAction,
  HeaderBox,
  TextContainer
} from '../../styles/ShoppingList/ShopHeader.style'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <HeaderContainer>
      <HeaderBox>
        <ButtonBox>
          <ButtonAction>
            <NavLink to={'/upper'}>
              <TextContainer>상의</TextContainer>
            </NavLink>
          </ButtonAction>
        </ButtonBox>
        <ButtonBox>
          <ButtonAction>
            <NavLink to={'/under'}>
              <TextContainer>하의</TextContainer>
            </NavLink>              
          </ButtonAction>
        </ButtonBox>
        <ButtonBox>
          <ButtonAction>
            <NavLink to={'/shoes'}>
              <TextContainer>신발</TextContainer>
            </NavLink>
          </ButtonAction>
        </ButtonBox>
        <ButtonBox>
          <ButtonAction>
            <NavLink to={'/hat'}>
              <TextContainer>모자</TextContainer>
            </NavLink>
          </ButtonAction>
        </ButtonBox>
        <ButtonBox>
          <ButtonAction>
            <NavLink to={'/bag'}>
              <TextContainer>가방</TextContainer>
            </NavLink>
          </ButtonAction>
        </ButtonBox>
        <ButtonBox>
          <ButtonAction>
            <NavLink to={'/underwear'}>
              <TextContainer>속옷</TextContainer>
            </NavLink>
          </ButtonAction>
        </ButtonBox>
        <ButtonBox>
          <ButtonAction>
            <NavLink to={'/outer'}>
              <TextContainer>아우터</TextContainer>
            </NavLink>
          </ButtonAction>
        </ButtonBox>
        <ButtonBox>
          <ButtonAction>
            <NavLink to={'/skirt'}>
              <TextContainer>스커트</TextContainer>
            </NavLink>
          </ButtonAction>
        </ButtonBox>
      </HeaderBox>
    </HeaderContainer>
  )
}

export default Header