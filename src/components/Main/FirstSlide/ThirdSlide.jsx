import React from 'react'
import { 
  AIPostContainer,
  IMGBox,
  Subscription,
  SubscriptionBox,
  ThirdContainer,
  TitleContainer,
  TitleSpan
} from '../../styles/ThirdSlide.style'

import { motion } from 'framer-motion'

function ThirdSlide() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50},
        visible: { opacity: 1, y: 0}
      }}
      initial= "hidden"
      animate= "visible"
      transition={{
        duration: 0.5,
        delay: 0.25
      }}
    >
      <ThirdContainer>
        <AIPostContainer>
          <TitleContainer>
            <TitleSpan>
              BASILIUM AI service<br/>
            </TitleSpan>
            <Subscription>
              You can see the 3D architecture of clothes
            </Subscription>
          </TitleContainer>
          <IMGBox>
            <SubscriptionBox>
              <Subscription>
                360 view of clothes<br/>
              </Subscription>
              <Subscription>
                의류를 3D로 간접체험 가능
              </Subscription>
            </SubscriptionBox>
          </IMGBox>
          <IMGBox>
            <SubscriptionBox>
              <Subscription>
                3D Modeling<br/>
              </Subscription>
              <Subscription>
                자신을 3D 모델로 의류 적용 가능
              </Subscription>
            </SubscriptionBox>
          </IMGBox>
        </AIPostContainer>
      </ThirdContainer>
    </motion.div>
  )
}

export default ThirdSlide