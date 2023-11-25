import styled from 'styled-components'
import { ReactComponent as CategoryIMG } from '../../assets/SVG/category.svg'
import { ReactComponent as Xbar } from '../../assets/SVG/Xbar.svg'
import { ReactComponent as Logo } from '../../assets/SVG/LOGO.svg'

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
    display: flex;
    flex-flow: row nowrap;
`

export const CategoryBox = styled.div`
    width: 10%;
    height: 100%;
    z-index: 3;
    transition: all 0.5s ease;
`

export const Category = styled(CategoryIMG)`
    width: 30px;
    height: 30px;
    margin: 0 auto;
`

export const Xbar = styled(Xbar)`
    width: 30px;
    height: 30px;
    margin: 0 auto;
`

export const ContentBar = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
`

export const Content = styled.div`
    width: 25%;
    height: 100%;
    background: none;
`

export const ContentText = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 25px;
    font-weight: lighter;
`

export const LogoBox = styled.div`
    width: 10%;
    height: 100%;
    margin: 0 auto;
    z-index: 3;
`

export const Logo = styled(Logo)`
    width: 75px;
    height: 80px;
    position: fixed;
    margin: 0 auto;
    cursor: pointer;
`