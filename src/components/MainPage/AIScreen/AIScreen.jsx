import React from 'react'
import * as S from './AIScreen.style'
import img1 from '../../../assets/AI/blog_1.jpg'
import img2 from '../../../assets/AI/blog_2.jpg'

function AIScreen() {
  return (
    <S.AiContainer>
      <span className="ct-title">
        BASILIUM AI service
      </span>
      <S.Container>
        <S.AIImagebox>
          <div className="img-box" src={img1} />
          <span className="ai-title">360 view of clothes</span>
          <span className="ai-desc">의류를 3D로 간접 체험 가능</span>
        </S.AIImagebox>
        <S.AIImagebox>
          <div className="img-box" src={img2} />
          <span className="ai-title">3D Modeling</span>
          <span className="ai-desc">자신을 3D 모델로 의류 착용 가능</span>
        </S.AIImagebox>
      </S.Container>
      <S.AllPostBtn>
        All Post
        <S.LoadMoreArrow />
      </S.AllPostBtn>
    </S.AiContainer>
  )
}

export default AIScreen