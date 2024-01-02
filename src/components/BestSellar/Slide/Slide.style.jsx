import styled from 'styled-components'

export const SlideBox = styled.div`
    width: 70vw;
    height: 60vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .slide-bg{
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;    
    }
    .slide-bg::-webkit-scrollbar{
        display: hidden;
    }
`