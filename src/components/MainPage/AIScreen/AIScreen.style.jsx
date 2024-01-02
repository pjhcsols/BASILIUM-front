import styled from 'styled-components'
import { ReactComponent as Postarrow} from '../../../assets/SVG/LoadMore.svg' 

export const AiContainer = styled.div`
    width: 90vw;
    height: 90vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background: none;
    .ct-title{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 35px;
        font-weight: bold;
        color: white;
    }
`

export const Container = styled.div`
    width: 40%;
    height: 60%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

export const AIImagebox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    .img-box{
        margin: 0 auto;
        background-image: url(${(props)=>props.src});
        object-fit: cover;
    }
    .ai-title{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 25px;
        font-weight: bold;
        color: white;
        transition: 0.5s ease-in-out;
        &:hover{
            transform: scale(1.05);
            color: #E2E5E7;
        }
    }
    .ai-desc{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 15px;
        font-weight: lighter;
        color: white;
        transition: 0.5s ease-in-out;
        &:hover{
            transform: scale(1.03);
            color: #E2E5E7;
        }
    }
`

export const AllPostBtn = styled.div`
    cursor: pointer;
    margin: 0 auto;
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