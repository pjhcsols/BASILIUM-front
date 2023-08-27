import React from 'react'

import BestSellarBar from './BestSellarBar'

import {
    StoreContainer,
    Backgroundiv,
    CategoryContainer,
    SlideBarContainer,
} from '../styles/Store/Store.style'
import CategorySlide from './Category/CategorySlide'
import Header from '../Header/header'
import API from '../Backend/Axios'
import { Gett } from '../Backend/BackEnd'

function MainStore() {

  return (
    <Backgroundiv>
      <Header />
      <button onClick={ Gett } style={{"width":"100%", "height": "100%"}}>Here!!!</button>
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