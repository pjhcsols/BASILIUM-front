import styled from "styled-components"

export const ButtonStyle = styled.button`
    position: relative;
    width: 100px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border-radius: 125rem;
    padding: 0;
    border: 2px solid transparent;
    border-color: white;
    background-color: rgba(0,0,0,0);
    transition: all 0.2s ease;
    z-index: 2;
    &:active{
        transform: scale(0.96);
    }
`

export const ButtonBox = styled.div`
    padding: 2px 4px;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    flex-direction: row;
    background: none;
    gap: 2px;
`

export const TextureBox = styled.span`
    font-family: "Noto Sans KR", sans-serif;
    color: white;
    align-items: left;
`