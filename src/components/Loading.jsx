import React from 'react'
import { 
    PacmanLoader
  } from 'react-spinners'
import { 
  Loadingdiv,
  Loadinglogo,
  Loadingtitle,
} from './styles/Loading.style'

function Loading() {
  return (
    <Loadingdiv>
      <Loadinglogo>
        <PacmanLoader 
            color="#D9D9D9"
            loading
            speedMultiplier={2}
        />
        <Loadingtitle>
          loading...
        </Loadingtitle>
      </Loadinglogo>
    </Loadingdiv>
  )
}

export default Loading