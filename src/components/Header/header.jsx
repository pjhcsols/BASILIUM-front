import React, { useEffect, useState } from 'react'

import { ReactComponent as Category } from '../../assets/SVG/category.svg'
import { ReactComponent as Xbar } from '../../assets/SVG/Xbar.svg'
import LOGO from '../../assets/LOGO.jpg'
import { NavLink } from 'react-router-dom'
import { 
  HeaderContainer,
  OpenLinkButton,
  HeaderLeftLinkContainer,
  HeaderRightLinkContainer,
  IndividualLinkContainer,
  LogoContainer,
  Logo,
  SpanContainer,
  CategoryBar,
  CategoryBox,
  XBox
} from '../styles/Header.style.jsx';

function Header(props) {
  const [extendHeader, setExtendHeader] = useState(false);

  return (
    <HeaderContainer
      isScroll={props}
    >
      <OpenLinkButton
        onClick={() => {
          setExtendHeader((curr)=> !curr);
        }}
        style={{
          "position": "absolute",
        }}
      >
        {
          extendHeader ? 
            <CategoryBar>
              <CategoryBox>
                <Category />
              </CategoryBox>
            </CategoryBar>
            :
            <CategoryBar>
              <XBox>
                <Xbar /> 
              </XBox>
            </CategoryBar>
        }
      </OpenLinkButton>
      <HeaderLeftLinkContainer>
        <IndividualLinkContainer>
          <NavLink to={"/about"} style={{"text-decoration": "none"}}>
            <SpanContainer>About</SpanContainer>
          </NavLink> 
        </IndividualLinkContainer>
        <IndividualLinkContainer>
          <NavLink to={"/store"} style={{"text-decoration": "none"}}>
            <SpanContainer>Store</SpanContainer>
          </NavLink>
        </IndividualLinkContainer>
      </HeaderLeftLinkContainer>
      <LogoContainer>
        <NavLink to={"/"}>
          <Logo
            src={LOGO} 
            alt="logo" 
          />
        </NavLink>
      </LogoContainer>
      <HeaderRightLinkContainer>
        <IndividualLinkContainer>
          <NavLink to={"/store"} style={{"text-decoration": "none"}}>
            <SpanContainer>Store</SpanContainer>
          </NavLink>
        </IndividualLinkContainer>
        <IndividualLinkContainer>
          <NavLink to={"/search"} style={{"text-decoration": "none"}}>
            <SpanContainer>Search</SpanContainer>
          </NavLink>
        </IndividualLinkContainer>
      </HeaderRightLinkContainer>
    </HeaderContainer>
  )
}

export default Header