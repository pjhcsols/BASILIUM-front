import React, { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import{
    MainContainer,
    LogoContainer,
    ShopLogo,
} from '../../styles/ShoppingList/ShoppingList.style'

import Logo from '../../../assets/LOGO.jpg'
import { NavLink } from 'react-router-dom'
import ListPage from './ListPage'

function ShoppingList() {
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
        <ListPage />
    </MainContainer>
  )
}

export default ShoppingList