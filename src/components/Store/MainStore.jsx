import React from 'react'

import BestSellarBar from './BestSellarBar'

import {
    StoreContainer,
    Backgroundiv,
    CategoryContainer,
} from '../styles/Store/Store.style'
import CategorySlide from './Category/CategorySlide'

function MainStore() {
  return (
    <Backgroundiv>
        <StoreContainer>
             <BestSellarBar />
             <CategoryContainer>
                <CategorySlide />
             </CategoryContainer>
        </StoreContainer>
    </Backgroundiv>
  )
}

export default MainStore