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
  const IMGprop = props.data.productPhotoUrl

  return (
    <GoodsBG>
      <DescriptionBox>
        <SetsumeBox>
          <MainBox>
            <Title>{props.data.productName}</Title>
            <CategoryButton>{props.data.productDesc}</CategoryButton>
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
                <Title>{props.data.productName}</Title>
                <Subtitle>{props.data.productPrice}</Subtitle>
              </TitleBox>
              <SharedBox>
                <HeartBtn />
                <DeliveryBox />
              </SharedBox>
              <DeliveryBox>
                <Title>Delivery Info.</Title>
                <br />
                <Subtitle>출고 예정일: 23-08-30</Subtitle>
                <Subtitle>배송정보: 23-08-31</Subtitle>
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