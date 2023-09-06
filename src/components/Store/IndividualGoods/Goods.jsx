import React, { useCallback, useEffect, useState } from 'react'
import Detail from './Detail'
import API from '../../Backend/Axios'

function Goods() {
  const [shopobj, setshopobj] = useState({
    'productId': null,
    "productCategoryId": 1,
    'productName': "",
    'productPrice': 0,
    'productDesc': "",  // Description
    'productPhotoUrl': "",
  })

  const AxiosDataReceived = useCallback(() => {
    API.post('/products/add',{
      'productId': null,
      "productCategoryId": 1,
      'productName': "클래식 B 주르핏 티셔츠",
      'productPrice': 45000,
      'productDesc': "상의",  // Description
      'productPhotoUrl': '/BASILIUM-front/src/assets/Goods/Huku.jpeg',
    })
    .then(response => {
      console.log(response.data)
      console.log("안녕 난 포스트")
    }).catch(error => {
      console.log(error.response.data)
    })
    API.get('/products')
    .then(response => {
      console.log(response)
      setshopobj({
        'productName': response.data[0].productName,
        "productCategoryId": 1,
        'productPrice': response.data[0].productPrice,
        'productDesc': response.data[0].productDesc,
        'productPhotoUrl': response.data[0].productPhotoUrl
      })
      console.log(response)
      console.log("안녕 난 겟")
    }).catch(error => {
      console.log(error.response.data)
    })
  })

  useEffect(()=>{
    AxiosDataReceived()
  }, [])
  const onClickfunc = (e) => {
    API.post('/products/add',{
      'productId': null,
      "productCategoryId": 1,
      'productName': "클래식 B 주르핏 티셔츠",
      'productPrice': 45000,
      'productDesc': "상의",  // Description
      'productPhotoUrl': '/BASILIUM-front/src/assets/Goods/Huku.jpeg',
    })
    .then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error.response.data)
    })
    API.get('/products')
    .then(response => {
      setshopobj({
        'productName': response.data.productName,
        "productCategoryId": 1,
        'productPrice': response.data.productPrice,
        'productDesc': response.data.productDesc,
        'productPhotoUrl': response.data.productPhotoUrl
      })
      console.log(response)
    })
  }

  return (
    <>
      <Detail 
        data={shopobj}
      />
    </>
    
  )
}

export default Goods