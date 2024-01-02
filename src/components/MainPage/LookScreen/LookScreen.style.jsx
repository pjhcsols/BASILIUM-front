import styled from 'styled-components'
import { ReactComponent as Postarrow} from '../../../assets/SVG/LoadMore.svg' 

export const LookContainer = styled.div`
    width: 90vw;
    height: 90vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background: none;
    .look-title{
        font-family: 'Noto Sans KR',sans-serif;
        font-size: 35px;
        font-weight: bold;
        color: white;
    }
    .look-desc{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 20px;
        font-weight: lighter;
        color: white;
    }
    .look-box-dummy{
        width: 100%;
        height: 50%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
    }
`

export const LookBox = styled.div`
    width: 28%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const LookMoreBtn = styled.div`
    cursor: pointer;
    width: 100px;
    height: 30px;
    text-align: center;
    color: white;
    transition: 0.5s ease-in-out;
    &:hover{
        transform: scale(1.05);
    }
`

export const LoadMoreArrow = styled(Postarrow)` 
    width: 35px;
    height: 35px;
`