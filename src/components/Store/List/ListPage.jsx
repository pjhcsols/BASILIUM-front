import React from 'react'

import Under1 from './Under/Under1'
import Under2 from './Under/Under2'
import Under3 from './Under/Under3'

import { FullPage, Slide } from 'react-full-page'
import { ListPageContainer } from '../../styles/ShoppingList/ListPage.style'

function ListPage() {
  return (
    <ListPageContainer>
      <FullPage>
        <Slide>
          <Under1 />
        </Slide>
        <Slide>
          <Under2 />
        </Slide>
        <Slide>
          <Under3 />
        </Slide>
      </FullPage>
    </ListPageContainer>
  )
}

export default ListPage