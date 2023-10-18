import React from 'react'
import { 
    PacmanLoader
  } from 'react-spinners'
import { 
  loadingdiv,
  loadinglogo ,
} from './styles/Loading.style'

function Loading() {
  return (
    <loadingdiv>
      <loadinglogo>
        <PacmanLoader 
            color="#D9D9D9"
            loading
            speedMultiplier={2}
        />
        <loadingtitle>
          loading...
        </loadingtitle>
      </loadinglogo>
    </loadingdiv>
  )
}

export default Loading