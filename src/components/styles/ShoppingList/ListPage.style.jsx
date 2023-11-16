import styled from 'styled-components'

export const ContentBox = styled.div`
    width: 80vw;
    max-width: 90vw;
    margin: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #212529;
`

export const ListPageContainer = styled.div`
    width: 60vw;
    position: relative;
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
`

export const Selectiondiv = styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`

export const PaginationBox = styled.div`
    width: 80vw;
    height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`