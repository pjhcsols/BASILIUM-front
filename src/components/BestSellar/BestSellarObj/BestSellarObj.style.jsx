import styled from 'styled-components'

export const ObjBox = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`

export const ImageBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // Image 따로 수정해서 Background 로 넘겨도 될듯함.
    background-image: url(${(props)=>props.src ? props.src : null});
`

export const DescBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    .price-text{
        font-family: 'EASTARJET-Light';
        font-size: ${(props)=>props.size};
        color: black;
    }
    .name-text{
        font-family: 'EASTARJET-Medium';
        font-size: ${(props)=>props.size};
        color: black;
    }
    .desc-text{
        font-family: 'EASTARJET-Light';
        font-size: ${(props)=>props.size};
        color: black;
    }
`