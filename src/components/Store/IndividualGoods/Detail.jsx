import React from 'react'
import { 
  ButtonContainer,
  BuyButton,
  CartButton,
  DeliveryBox,
  DescriptionBox,
  GoodsBG, 
  HeartBtn, 
  IMG, 
  IMGBox,
  Navigation,
  Price,
  SharedBox,
  Subtitle,
  TextBox,
  Title,
  TitleBox
} from '../../styles/IndividualGoods/Detail.style'
import {ReactComponent as CartIMG} from '../../../assets/SVG/ShoppingCartIMG.svg'
import { NavLink } from 'react-router-dom'

function Detail(props) {
  const ImgProp = props.src
  return (
    <GoodsBG>
      <DescriptionBox>
        <IMGBox>
          <IMG
            src={ImgProp}
          />
          <TextBox>
            <TitleBox>
              <Title>Product Info.</Title>
              <br/>
              <Title>{props.title}클래식 B 주르핏 티셔츠</Title>
              <Subtitle>{props.subtitle}45,000원</Subtitle>
              <Price>{props.title}</Price>
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
          </TextBox>
        </IMGBox>
      </DescriptionBox>
    </GoodsBG>
  )
}

export default Detail