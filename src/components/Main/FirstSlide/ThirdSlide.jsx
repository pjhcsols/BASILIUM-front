import React from 'react'
import { 
  AIPostContainer,
  IMG,
  IMG2,
  IMGBox,
  IMGContainer,
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
            <SubscriptionBox
              style={{
                "right":"49%"
              }}
            >
              <Subscription>
                360 view of clothes<br/>
              </Subscription>
              <Subscription>
                의류를 3D로 간접체험 가능
              </Subscription>
            </SubscriptionBox>
          </IMGBox>
          <IMGContainer
            style={{
              "bottom" : "32%",
              "left" : "21%"
            }}
          >
            <IMG />
          </IMGContainer>
          <IMGBox>
            <SubscriptionBox
              style={{
                "right":"19%"
              }}
            >
              <Subscription>
                3D Modeling<br/>
              </Subscription>
              <Subscription>
                자신을 3D 모델로 의류 적용 가능
              </Subscription>
            </SubscriptionBox>
          </IMGBox>
          <IMGContainer
            style={{
              "bottom" : "32%",
              "right" : "53%"
            }}
          >
            <IMG2 />
          </IMGContainer>
        </AIPostContainer>
      </ThirdContainer>
    </motion.div>
  )
}

export default ThirdSlide