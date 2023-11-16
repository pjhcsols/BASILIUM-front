import styled from 'styled-components'

export const SearchBarBG = styled.div`
    width: 200px;
    height: 60px;
    position: fixed;
    top: 9%;
    border: 1px solid white;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Search = styled.input`
    position: absolute;
    width: 92%;
    height: 45px;
    position: absolute;
    box-shadow: 0 0 0 1px #fff inset;
    border-radius: 12px;
    transition: 0.5s ease;
    border: none;
    text-align: center;
    background-color: inherit;
    color: white;
`