import React from 'react'
import { 
  BestSellarBox, 
  SubscriptionText,
  IMGBox,
  TitleTexture,
  SubscriptionBox
} from '../styles/Store/BestSellar/BestSellarObj.style'

function BestsellarObj(props) {
  return (
    <BestSellarBox>
        <IMGBox src={props.src}/>
        <TitleTexture>
            {props.title}
        </TitleTexture>
        <SubscriptionBox>
          <SubscriptionText>
              {props.content}
          </SubscriptionText>
          <SubscriptionText>
              {props.price}
          </SubscriptionText>
        </SubscriptionBox>
    </BestSellarBox>
  )
}

export default BestsellarObj