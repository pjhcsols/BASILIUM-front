import React, { useEffect } from 'react'
import { 
  BestSellarBox, 
  SubscriptionText,
  IMGBox,
  TitleTexture,
  SubscriptionBox,
  TextBox
} from '../styles/Store/BestSellar/BestSellarObj.style'

function BestsellarObj(props) {
  console.log(props);
  return (
    <BestSellarBox>
      <IMGBox>
        <img 
          src={props.src} 
          alt="bestsellarimg"
          className="bestsellar"
        />
      </IMGBox> 
      <TextBox>
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
      </TextBox>
    </BestSellarBox>
  )
}

export default BestsellarObj