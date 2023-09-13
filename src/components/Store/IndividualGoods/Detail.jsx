import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
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
  SetsumeBox,
  SharedBox,
  Subtitle,
  TextBox,
  TextureBox,
  Title,
  TitleBox
} from '../../styles/IndividualGoods/Detail.style'
import {ReactComponent as CartIMG} from '../../../assets/SVG/ShoppingCartIMG.svg'
import { UploadBuyingAPI, UploadShoppingCartAPI } from '../../Backend/Axios'

function Detail(props) {
  const IMGprop = props.data.productPhotoUrl
  const navi = useNavigate()
  const [ProductID, setProductID] = useState(props.productID)

  const useConfirm = (message = null, onConfirm, onCancel) => {
    if(!onConfirm || typeof onConfirm != "function"){
      return ;
    }
    if(onCancel || typeof onCancel != "function"){
      return ;
    }

    const confirmAction = () => {
      if(window.confirm(message)){
        onConfirm()
      }else{
        onCancel()
      }
    }
    return confirmAction
  }

  const GoShoppingcart = (e) => {
    e.preventDefault()
    navi("/shoppingcart")
  }
  const CancelConfirm = (e) => {
    e.preventDefault()
  }

  const ConfirmShopping = useConfirm(
    "장바구니에 넣었습니다.\
    이동하시겠습니까?",
    GoShoppingcart,
    CancelConfirm
  )

  const UploadShoppingCart = () => {
    UploadShoppingCartAPI.post(`/product/shoppingcart/`,ProductID)
      .then(data => {
        console.log(data)
        ConfirmShopping()
      })
      .catch(error => {
        console.log(error)
      })
  }

  const BuyGoods = () => {
    UploadBuyingAPI.post(`/product/purchase`,ProductID)
      .then(data => {
        console.log(data)
        navi("/product/purchase")
      })
      .catch(error => {
        console.log(error)
        alert("구매 페이지로 이동이 불가합니다.\
        문의: basilium")
      })
  }

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
                <CartButton onClick={UploadShoppingCart}>
                  <CartIMG />
                  <Title>장바구니</Title>
                </CartButton>
                <BuyButton onClick={BuyGoods}>
                <Title>바로 구매</Title>
                </BuyButton>
              </ButtonContainer>
            </TextureBox>
          </TextBox>
        </SetsumeBox>
      </DescriptionBox>
    </GoodsBG>
  )
}

export default Detail