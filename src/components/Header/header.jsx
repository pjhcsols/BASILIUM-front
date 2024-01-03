import React, { 
  useState 
} from 'react'

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
  Mymenu,
  HeaderLinkContainer,
  CategorySelect
} from '../styles/Header.style.jsx';
import S_Category from './S_Category'
import SearchBar from './SearchBar'

function Header(props) {
  const [extendHeader, setExtendHeader] = useState(false)
  const [IsMyMenu, setIsMyMenu] = useState(false)
  const [IsClick, SetIsClick] = useState(false)
  const navi = useNavigate()

  const onClickUser = () => {
    setIsMyMenu((prevState) => !prevState)
  }

  const onClickCart = () => {
    navi('/shopCart')
  }

  const onClickSearchBar = () => {
    SetIsClick((prev)=>!prev)
  }
  
  const isLogin = () =>{
    navi('/mypage');
  }


  const isLogout = () =>{
    localStorage.removeItem("key");
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
              <XBox>
                <Xbar /> 
                <S_Category setPostId={props.setPostId}/>
              </XBox>
            </CategoryBar>
            :
            <CategoryBar>
              <CategoryBox>
                <CategorySelect />
              </CategoryBox>
            </CategoryBar>
        }
      </OpenLinkButton>

      <HeaderLinkContainer>
        <HeaderLeftLinkContainer>
          <IndividualLinkContainer>
            <NavLink to={"/"} style={{"text-decoration": "none"}}>
              <SpanContainer>About</SpanContainer>
            </NavLink> 
          </IndividualLinkContainer>
          <IndividualLinkContainer>
            <NavLink to={"/"} style={{"text-decoration": "none"}}>
              <SpanContainer>
                Store
              </SpanContainer>
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
          <IndividualLinkContainer >
            <SpanContainer onClick={onClickSearchBar}>
              Search
            </SpanContainer> 
            {
              IsClick && (
                <SearchBar />
              )
            }
          </IndividualLinkContainer>
        </HeaderRightLinkContainer>
      </HeaderLinkContainer>

      <UserContainer onClick={onClickUser}>
        <UserIMG />
        {
          IsMyMenu && (
            <ExpendedMenu>
              <Mymenu onClick={isLogin}>
                My Page
              </Mymenu>
              <Submenu onClick={isLogout}>
                Logout
              </Submenu>
            </ExpendedMenu>
          )
        }
      </UserContainer>
      <CartContainer onClick={onClickCart}>
        <CartIMG style={{"color":"white"}}/>
      </CartContainer>
    </HeaderContainer>
  )
}

export default Header