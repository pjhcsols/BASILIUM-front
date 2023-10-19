import React, { useEffect, useState } from 'react'
import{
    MainContainer,
    LogoContainer,
    ShopLogo,
} from '../../styles/ShoppingList/ShoppingList.style'

import Logo from '../../../assets/LOGO.jpg'
import { NavLink } from 'react-router-dom'
import ListPage from './ListPage'
import Header from '../../Header/header'

function ShoppingList() {
    const [isScrollingDown, setIsScrollingDown] = useState(false)

    const [postid, setPostId] = useState(0);
    useEffect(() => {
        const urlParam = new URLSearchParams(window.location.search);
        const newPostID = urlParam.get('categoryid')
        setPostId(newPostID);
        const handleScroll = () => {
            if(window.scrollY > 1){
                setIsScrollingDown(true);
            }else{
                setIsScrollingDown(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }; 
    }, [])
    return (
        <MainContainer>
            <Header
                setPostId={setPostId}
                isScroll={isScrollingDown}
            />
            <ListPage 
                id={postid}
            />
        </MainContainer>
    )
}

export default ShoppingList