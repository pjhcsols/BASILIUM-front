import styled from 'styled-components'
import { ReactComponent as LeftArrow } from '../../../../assets/SVG/Go.svg'
import { ReactComponent as RightArrow } from '../../../../assets/SVG/Back.svg'

export const PaginationBG = styled.div`
    width: 30vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const RArrow = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const LArrow = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const LeftBtn = styled(LeftArrow)`
    width: 30px;
    height: 30px;
    margin: 0 auto;
    color: white;
`

export const RightBtn = styled(RightArrow)`
    width: 30px;
    height: 30px;
    margin: 0 auto;
    color: white;
`

export const MidBox = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
`

export const MidText = styled.span`
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: white;
    position: absolute;
    bottom: 20px;
`