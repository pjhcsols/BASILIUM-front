import styled from 'styled-components'

/* Total Page Design */
export const Wrapper = styled.div`
    width: 100vw;
    height: 150vh;
    background-image: url();
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0;
    padding: 10vh 15vw 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .main{
        margin: 0;
        padding: 0;
        flex-flow: column nowrap;
        align-items: center;
        float: right;
    }
    .title{
        font-size: 5rem;
        color: white;
    }
    .sub-logo{
        margin: 1vh 0 5vh 0;
        color: white;
        font-size: 1.5rem;
    }
`

/* Select the Login or Signup Block */
export const SelectBox = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-flow: row nowrap;
`

export const SelectObject = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: D9D9D9;
    .select-object-span{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 22px;
        font-weight: lighter;
        color: black;
    }
`