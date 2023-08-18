import styled from 'styled-components'

export const CategoryContainer = styled.div`
    width: 20%;
    height: 24%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Category = styled.button`
    width: 100%;
    height: 80%;
    position: absolute;
    text-align: center;
    background-image: url(${props => props.src});
`

export const CategoryName = styled.span`
    width: 100%;
    height: 50%;
    position: absolute;
`