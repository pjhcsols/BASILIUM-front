import styled from 'styled-components'

export const ContentBox = styled.div`
    width: 100vw;
    position: relative;
    top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #212529;
`

export const ListPageContainer = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: column;
    background-color: #212529;
`

export const ListPageRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const CategoryBox = styled.div`
    width: 20vw;
    position: absolute;
    bottom: 120px;
`

export const CtgSpan = styled.span`
    font-family: "Noto Sans KR", sans-serif;
    color: white;
    font-weight: bolder;
    font-size: 35px;
`

export const CategoryExp = styled.div`
    width: 20vw;
    height: 8vh;
    position: relative;
    text-align: center;
    top: 90px;
`

export const ModalTitle = styled.h3`
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 20px 0;
    font-weight: 500;
    font-size: 18px;
    color: var(--primary-text-color);
    line-height: 1.2rem;
`

export const ModalSpan = styled.span`
    font-size: 14px;
    color: var(--secondary-text-color);
    font-weight: 400;
`

// Modal 관련 Style
export const ModalContainer = styled.div`
    position: absolute;
    left: 70%;
    width: 50px;
    height: 50px;
`

export const Selectiondiv = styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`

export const ModalBackDrop = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #212529;
    border-radius: 10px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const ModalBG = styled.div`
    position: fixed;
    z-index: 10;
    width: 50%;
    height: 50%;
    background-color: rgba(255,255,255,0.15);
    backdrop-filter: blur(5px);
`

export const ModalBtn = styled.button`
    background-color: var(--coz-purple-600);
    text-decoration: none;
    border: none;
    padding: 20px;
    color: white;
    border-radius: 30px;
    cursor: pointer;
`

export const ExitBtn = styled(ModalBtn)`
    background-color: #4000c7;
    border-radius: 10px;
    text-decoration: none;
    margin: 10px;
    padding: 5px 10px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalView = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    width: 500px;
    height: 200px;
    box-shadow: 1px 1px 1px 1px gray;
    background-color: #fff;
`