import React, { useEffect, useState } from 'react'
import{
    MainContainer,
} from '../../styles/ShoppingList/ShoppingList.style'

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
            <ListPage 
                id={postid}
            />
            <Header
                setPostId={setPostId}
                isScroll={isScrollingDown}
            />
        </MainContainer>
    )
}

export default ShoppingList