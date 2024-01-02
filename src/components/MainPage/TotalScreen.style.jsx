import styled from 'styled-components'

export const SlideBox = styled.div`
    width: ${(props)=> props.width ? (props.width * 100) : 100}%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`