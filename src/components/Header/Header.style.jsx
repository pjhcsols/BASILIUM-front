import styled from 'styled-components'
import { ReactComponent as CategoryIMG } from '../../assets/SVG/category.svg'
import { ReactComponent as Xbar } from '../../assets/SVG/Xbar.svg'
import { ReactComponent as LogoIMG } from '../../assets/SVG/LOGO.svg'
import { ReactComponent as CartIMG } from '../../assets/SVG/ShoppingCartIMG.svg'
import { ReactComponent as ProfileIMG } from '../../assets/SVG/Profile.svg'

export const HeaderBG = styled.div`
    width: 100vw;
    height: ${(props)=>(
        props.IsScroll ? '100px' : '80px' 
    )};
    background: ${(props)=>(
        props.IsScroll ? '#212529' : 'none'
    )};
    z-index: 2;
    position: fixed;
`

export const HeaderGrid = styled.div`
    width: 80vw;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

export const CategoryBox = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    transition: all 0.5s ease;
`

export const Category = styled(CategoryIMG)`
    width: 25px;
    height: 25px;
    margin: 0 auto;
    z-index: 2;
    cursor: pointer;
`

export const XbarIMG = styled(Xbar)`
    width: 25px;
    height: 25px;
    z-index: 2;
    margin: 0 auto;
    cursor: pointer;
`

export const ContentBar = styled.div`
    width: 84%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 25%;
    height: 100%;
    background: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
`

export const ContentText = styled.a`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
    font-weight: lighter;
    color: white;
    transition: 0.5s all ease-in-out;
    &:hover{
        transform: scale(1.08);
    }
`

export const LogoBox = styled.div`
    width: 5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled(LogoIMG)`
    width: 45px;
    height: 50px;
    margin: 0 auto;
    z-index: 4;
    cursor: pointer;
`

export const CartBox = styled.div`
    width: 5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    cursor: pointer;
`

export const Cart = styled(CartIMG)`
    width: 35px;
    height: 35px;
    color: white;
`

export const ProfileBox = styled.div`
    width: 5%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    cursor: pointer;
`

export const Profile = styled(ProfileIMG)`
    width: 35px;
    height: 35px;
    color: white;
`

export const ProfileToggleBox = styled.div`
    width: 125px;
    height: ${(props)=>props.IsBrandUser ? '300px' : '200px'};
    position: absolute;
    top: 80px;
    background: none;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 5px 5px 5px 5px;
`

export const ProfileContentBox = styled.div`
    width: 125px;
    height: 100px;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px 5px 5px 5px;
`

export const ProfileText = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 25px;
    font-weight: lighter;
    color: white;
`