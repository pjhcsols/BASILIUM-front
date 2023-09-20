import React, { 
  useCallback, 
  useEffect, 
  useState 
} from 'react'
import Detail from './Detail'
import API, { 
  DownloadFiles,
} from '../../Backend/Axios'
import Loading from '../../Loading'
import Subscription from './Subscription'


function Goods() {
  const [isLoading, setIsLoading] = useState(null)
  const [shopobj, setshopobj] = useState({
    'productId': null,
    "productCategoryId": 1,
    'productName': "",
    'productPrice': 0,
    'productDesc': "",  // Description
    'productPhotoUrl': "",
  })

  const formData = new FormData()

  // ImagesList 
  const [ImagesList, setImagesList] = useState([])
  const [ShowImageList, SetShowImageList] = useState([])

  // According to Axios, Post some Image data.
  const reader = new FileReader()

  const ImageEncoding = (images) =>{
      for(let i = 0;i<ImagesList.length;i++){
          reader.readAsDataUrl(ImagesList[i])
          new Promise((resolve)=>{
              reader.onload = () => {
                  SetShowImageList(reader.result)
                  resolve()
              }
          })   
      }
      setIsLoading(false)
  }

  const UploadImageFile = () => {
      DownloadFiles
          .get('/getProductPhotos', {
              productid : 1
          })
          .then(data => {
              console.log(data)
              const DataArr = Array.from(data)
              DataArr.forEach(element => {
                  console.log(element)
                  setImagesList([...element])
              })
          })
          .catch(error => {
              console.log("useEffect DownloadFiles Error")
              console.log(error)
          }
      )
      ImageEncoding()
  }

  const AxiosDataReceived = useCallback(() => {
    API.post('/products/add',{
      'productId': null,
      "productCategoryId": 1,
      'productName': "클래식 B 주르핏 티셔츠",
      'productPrice': 45000,
      'productDesc': "상의",  // Description
      'productPhotoUrl': '',
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
    setIsLoading(true)
    AxiosDataReceived()
    UploadImageFile()
    ImageEncoding()
  }, [])

  return (
    <>
      {
        isLoading ? 
        <Loading />
        :
        <>
          <Detail data={shopobj} />
          <Subscription />
        </>
      }
    </>
  )
}

export default Goods