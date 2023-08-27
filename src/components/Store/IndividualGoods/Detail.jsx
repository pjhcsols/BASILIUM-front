import React, { useEffect } from 'react'
import { 
  ButtonContainer,
  BuyButton,
  CartButton,
  CategoryButton,
  DeliveryBox,
  DescriptionBox,
  GoodsBG, 
  HeartBtn, 
  IMG, 
  ImgBox,
  MainBox,
  Navigation,
  Price,
  SetsumeBox,
  SharedBox,
  Subtitle,
  TextBox,
  TextureBox,
  Title,
  TitleBox
} from '../../styles/IndividualGoods/Detail.style'
import {ReactComponent as CartIMG} from '../../../assets/SVG/ShoppingCartIMG.svg'


function Detail(props) {
  const IMGprop = props.src

  return (
    <GoodsBG>
      <DescriptionBox>
        <SetsumeBox>
          <MainBox>
            <Title>{props.title}클래식 B 주르핏 티셔츠</Title>
            <CategoryButton>{props.category}상의</CategoryButton>
          </MainBox>
          <TextBox>
            <ImgBox>
              <IMG
                src={IMGprop}
              />
            </ImgBox>
            <TextureBox>
              <TitleBox>
                <Title>Product Info.</Title>
                <br/>
                <Title>{props.title}클래식 B 주르핏 티셔츠</Title>
                <Subtitle>{props.price}45,000원</Subtitle>
              </TitleBox>
              <SharedBox>
                <HeartBtn />
                <DeliveryBox />
              </SharedBox>
              <DeliveryBox>
                <Title>Delivery Info.</Title>
                <br />
                <Subtitle>출고 예정일: {props.Dayofrelease}</Subtitle>
                <Subtitle>배송정보: {props.Dayofarrive}</Subtitle>
              </DeliveryBox>
              <ButtonContainer>
                <Navigation to="/shoppingcart">
                  <CartButton>
                    <CartIMG />
                    <Title>장바구니</Title>
                  </CartButton>
                </Navigation>
                <Navigation to="/buy">
                  <BuyButton>
                  <Title>바로 구매</Title>
                  </BuyButton>
                </Navigation>
              </ButtonContainer>
            </TextureBox>
          </TextBox>
        </SetsumeBox>
      </DescriptionBox>
    </GoodsBG>
  )
}

export default Detail