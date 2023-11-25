import styled from 'styled-components'
import { ReactComponent as StoreMark } from '../../../../assets/SVG/ButtonPlay.svg'

export const StoreButton = styled.button`
    width: 230px;
    height: 100px;
    background: none;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 10px;
`

export const MarkBox = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StoreMark = styled(StoreMark)`
    width: 15px;
    height: 20px;
    color: red;
`

export const StoreTextBox = styled.div`
    width: 70%;
    height: 100%;
    text-align: center;
`

export const StoreText = styled.text`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
    font-weight: lighter;
`