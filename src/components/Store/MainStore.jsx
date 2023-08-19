import React from 'react'

import BestSellarBar from './BestSellarBar'

import {
    StoreContainer,
    Backgroundiv,
} from '../styles/Store/Store.style'

function MainStore() {
  return (
    <Backgroundiv>
        <StoreContainer>
             <BestSellarBar />
        </StoreContainer>
    </Backgroundiv>
  )
}

export default MainStore