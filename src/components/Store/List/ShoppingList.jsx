import React, { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import{
    MainContainer,  
    GridContainer,
    HeaderBox,
    LogoContainer,
    ShopLogo,
} from '../../styles/ShoppingList/ShoppingList.style'

import Header from '../Header/Header'
import Logo from '../../../assets/LOGO.jpg'
import { NavLink } from 'react-router-dom'
import ListPage from './ListPage'
import Upper from './Upper/Upper'
import Under1 from './Under/Under1'
import Shoes from './Shoes/Shoes'
import Hat from './Hat/Hat'
import Bag from './Bag/Bag'
import Underwear from './Underwear/Underwear'
import Outer from './Outer/Outer'
import Skirt from './Skirt/Skirt'

function ShoppingList({matches}) {
  return (
    <MainContainer>
        <LogoContainer>
            <NavLink to={"/"}>
                <ShopLogo
                    src={Logo}
                    alt="ShopLogo"
                />
            </NavLink>
        </LogoContainer>
        <HeaderBox>
            <Header />
        </HeaderBox>
        <ListPage />
        <Routes>
            <Route exact path="/shop" component={<Upper />}/> 
            <Route path="/shop/under" component={<Under1 />} />
            <Route path="/shop/shoes" component={<Shoes />}/>
            <Route path="/shop/hat" component={<Hat />}/>
            <Route path="/shop/bag" component={<Bag />}/>
            <Route path="/shop/underwear" component={<Underwear />}/>
            <Route path="/shop/outer" component={<Outer />}/>
            <Route path="/shop/skirt" component={<Skirt />}/>
        </Routes>
    </MainContainer>
  )
}

export default ShoppingList