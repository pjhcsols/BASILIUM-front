import React, { useEffect, useState } from 'react'
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
import Detail from './Detail'
import API, { base_url } from '../../Backend/Axios'

function Goods() {
  const [Shopping, SetShopping] = useState({
      "productCategoryId": 0,
      "productName": "",
      "productPrice": 0,
      "productDesc": "",
      "productPhotoUrl": "",
  });
  SetShopping({
    "productCategoryId": 40,
    "productName": "Hi",
    "productPrice": 50000,
    "productDesc": "hi",
    "productPhotoUrl": "hello",
  })
  useEffect(()=>{
    API.post(`${base_url}`,{
      "productCategoryId": Shopping.productCategoryId,
      "productName": Shopping.productName,
      "productPrice": Shopping.productPrice,
      "productDesc": Shopping.productDesc,
      "productPhotoUrl": Shopping.productPhotoUrl
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
    API.get(`${base_url}`)
      .then(response => {
        console.log(response);
        SetShopping({
          "productCategoryId": response,
          "productName": "클래식 B 주르핏 티셔츠",
          "productPrice": 45000,
          "productDesc": "야호",
          "productPhotoUrl": "/asset/hello.svg"
        })
    }).catch(error => {
      console.log(error);
    })
  },[])

  return (
    <>
      <Detail 
        
      />
    </>
  )
}

export default Goods