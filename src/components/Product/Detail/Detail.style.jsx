import styled from 'styled-components'

export const DetailBox = styled.div`
    width: 55vw;
    border: 1px solid white;
    display: flex;
    flex-flow: column nowrap;
`

export const DetailBtnBox = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-flow: row nowrap;
`

export const DetailBtn = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DetailImgBox = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
`

export const DetailImg = styled.div`
    background-image: url(${(props)=>props.src});
`