import React from 'react'

import BestSellarBar from './BestSellarBar'

import {
    StoreContainer,
    Backgroundiv,
    CategoryContainer,
    SlideBarContainer,
} from '../styles/Store/Store.style'
import CategorySlide from './Category/CategorySlide'
import { SlideBar } from '../styles/Store/BestSellar/BestSellarBar.style'

function MainStore() {
  return (
    <Backgroundiv>
      <StoreContainer>
        <SlideBarContainer>
            <BestSellarBar />
        </SlideBarContainer>
        <CategoryContainer>
          <CategorySlide />
        </CategoryContainer>
      </StoreContainer>
    </Backgroundiv>
  )
}

export default MainStore