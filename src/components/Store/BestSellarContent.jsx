import React, { useEffect } from 'react'

import { 
  BestSellarContainer
} from '../styles/Store/BestSellar/BestSellarContent.style'

import ManToMan from '../../assets/Goods/ManToMan.jpg'
import BestsellarObj from './BestsellarObj'

function BestSellarContent(props) {
  return (
    <BestSellarContainer>
        <BestsellarObj
            src={ props.src }
            title={ props.title }
            content={ props.content }
            price={ props.price }
        />
    </BestSellarContainer>
  )
}

export default BestSellarContent