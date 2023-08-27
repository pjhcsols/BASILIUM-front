import React from 'react'
import { 
  ButtonContainer,
  BuyButton,
  CartButton,
  DescriptionBox,
  GoodsBG,
  IMGBox,
  Subtitle,
  TitleBox,
} from '../../styles/IndividualGoods/Detail.style'
import { 
  useNavigate 
} from 'react-router-dom'


function Goods(props) {
  const navigation = useNavigate();

  const OnClickCart = (e) => {
    e.preventDefault();
    navigation("/cart");
  };

  const onClickBuy = (e) => {
    e.preventDefault();
    navigation("/buy");
  }

  return (
    <GoodsBG>
      <DescriptionBox>
        <IMGBox
          src={props.src}
        >
          <IMG />
        </IMGBox>
        <TitleBox>
          <Title>
            {props.title}
          </Title>
          <Subtitle>
            {props.subtitle}
          </Subtitle>
          <Price>
            {props.price}
          </Price>
        </TitleBox>
        <ButtonContainer>
          <CartButton>장바구니</CartButton>
          <BuyButton>바로 구매</BuyButton>
        </ButtonContainer>
      </DescriptionBox>
    </GoodsBG>
  )
}

export default Goods