import React from 'react'

import { 
  BestSellarContainer
} from '../styles/Store/BestSellar/BestSellarContent.style'

import ManToMan from '../../assets/Goods/ManToMan.jpg'
import BestsellarObj from './BestsellarObj'

function BestSellarContent() {
  return (
    <BestSellarContainer>
        <BestsellarObj
            src={ ManToMan }
            title={"Basilium"}
            content={"클래식 B 루즈핏 티셔츠"}
            price={"42,000원"}
        />
    </BestSellarContainer>
  )
}

export default BestSellarContent