import React, { 
  useEffect, 
  useState 
} from 'react'

import { ReactComponent as Category } from '../../assets/SVG/category.svg'
import { ReactComponent as Xbar } from '../../assets/SVG/Xbar.svg'
import { ReactComponent as UserIMG } from '../../assets/Header/User.svg'
import { ReactComponent as CartIMG } from '../../assets/SVG/ShoppingCartIMG.svg' 
import LOGO from '../../assets/LOGO.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
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
  XBox,
  CartContainer,
  UserContainer,
  ExpendedMenu,
  Submenu,
  Mymenu
} from '../styles/Header.style.jsx';

function Header(props) {
  const [extendHeader, setExtendHeader] = useState(false)
  const [IsMyMenu, setIsMyMenu] = useState(false)

  const navi = useNavigate()

  const onClickUser = () => {
    setIsMyMenu((prevState) => !prevState)
  }

  const onClickCart = () => {
    navi('/shopCart')
  }
  return (
    <HeaderContainer
      isScroll={props.isScroll}
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
          <NavLink to={"/"} style={{"text-decoration": "none"}}>
            <SpanContainer>About</SpanContainer>
          </NavLink> 
        </IndividualLinkContainer>
        <IndividualLinkContainer>
          <NavLink to={"/"} style={{"text-decoration": "none"}}>
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
          <NavLink to={"/"} style={{"text-decoration": "none"}}>
            <SpanContainer>Store</SpanContainer>
          </NavLink>
        </IndividualLinkContainer>
        <IndividualLinkContainer>
          <NavLink to={"/"} style={{"text-decoration": "none"}}>
            <SpanContainer>Search</SpanContainer> 
          </NavLink>
        </IndividualLinkContainer>
      </HeaderRightLinkContainer>
      <UserContainer onClick={onClickUser}>
        <UserIMG />
        {
          IsMyMenu && (
            <ExpendedMenu>
              <Mymenu onClick={navi('/mypage')}>
                My Page
              </Mymenu>
              <Submenu>
                Logout
              </Submenu>
            </ExpendedMenu>
          )
        }
      </UserContainer>
      <CartContainer onClick={onClickCart}>
        <CartIMG />
      </CartContainer>
    </HeaderContainer>
  )
}

export default Header