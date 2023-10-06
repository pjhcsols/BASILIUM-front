import React from 'react'
import { 
    Header,
    LogoIMG,
    LogoInfo
} from '../styles/Header/ShopHeader.style'

function ShopHeader() {
  return (
    <Header>
        <LogoIMG>
            <LogoInfo />
        </LogoIMG>
    </Header>
  )
}

export default ShopHeader