import React, { 
  useEffect, 
  useRef, 
  useState
} from 'react'

import { 
  ListPageContainer, 
  ListPageRow 
} from '../../styles/ShoppingList/ListPage.style'
import { 
  CountingAPI, 
  DownloadFiles 
} from '../../Backend/Axios'


import Loading from '../../Loading'
import ShopObj from './ShopObj'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { 
  SkeletonDesign, 
  SkeletonPrice, 
  SkeletonTitle, 
  Skeletondiv 
} from '../../styles/List/ShopObj.style'

function ListPage(props) {
  // Related with loading
  const [isLoading, setIsLoading] = useState(false)
  
  // Related with Object List
  const [ObjList, setObjList] = useState([
    {
      "ImageUrl": "",
      "GoodsName": "청자켓",
      "GoodsCategory": 1,
      "GoodsPrice": "45000",
      "GoodsHeart": false,
    },
    {
      "ImageUrl": "none",
      "GoodsName": "블라우스",
      "GoodsCategory": 2,
      "GoodsPrice": 50000,
      "GoodsHeart": false,
    },
    {
      "ImageUrl": "none",
      "GoodsName" : "신발",
      "GoodsCategory" : 3,
      "GoodsPrice": 35000,
      "GoodsHeart": false,
    },
    {
      "ImageUrl" : "none",
      "GoodsName": "흰 셔츠",
      "GoodsCategory": 4,
      "GoodsPrice" : 37000,
      "GoodsHeart": false,
    },
    {
      "ImageUrl" : "none",
      "GoodsName": "블랙 티셔츠",
      "GoodsCategory": 5,
      "GoodsPrice" : 33000,
      "GoodsHeart": false,
    },
    {
      "ImageUrl" : "none",
      "GoodsName": "흰색 박스티",
      "GoodsCategory" : 6,
      "GoodsPrice" : 56000,
      "GoodsHeart": false,
    },
    {
      "ImageUrl" : "none",
      "GoodsName": "블랙 박스티",
      "GoodsCategory": 7,
      "GoodsPrice" : 65000,
      "GoodsHeart": false,
    },
    {
      "ImageUrl" : "none",
      "GoodsName": "져지",
      "GoodsCategory": 8,
      "GoodsPrice" : 55000,
      "GoodsHeart": false,
    },
  ])

  const SelectShop = useRef()
 
  // formData and reader 
  const formData = new FormData()
  const reader = new FileReader()

  // Related to Images
  const [ImageCount, setImageCount] = useState(0)
  const [ImagesList, setImagesList] = useState([])
  const [ShowImageList, SetShowImageList] = useState([])

  // Related with Pagination
  const [contentInfo, setContentInfo] = useState([])

  // Related with ProductID
  const [ProductID, setProductID] = useState(0)

  // Image Encoding and Showing List
  const ImageEncoding = (images) =>{
    for(let i = 0;i<ImagesList.length;i++){
      reader.readAsDataUrl(ImagesList[i])
      new Promise((resolve)=>{
          reader.onload = () => {
              SetShowImageList(reader.result)
              resolve()
          }
      })
      setIsLoading(false)
    }
  }

  const CountingGoods = () => {
    CountingAPI
      .get(`countPhotos/${ProductID}`)
      .then(count => {
        setImageCount(count)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const DownloadImageFunction = () => {
    DownloadFiles
      .get(`/downloadProductPhotos/${ProductID}`, {
          num : 1
      })
      .then(data => {
          console.log(data)
          const DataArr = Array.from(data)
          DataArr.forEach(element => {
              console.log(element)
              SetShowImageList([...element])
          })
      })
      .catch(error => {
          console.log("useEffect DownloadFiles Error")
          console.log(error)
      }
    )
    ImageEncoding()
  }

  useEffect(()=>{
    // setIsLoading(true)
    // DownloadImageFunction()
    // setObjList(Array(ImageCount).fill(null).map((_,index) => index))
    // ImageEncoding()
  }, [])

  function renderListPage(){
    var list = [];
    if(isLoading){
      list.push(
        <>
          <ListPageRow>
            <Skeletondiv>
              <SkeletonDesign />
              <SkeletonTitle />
              <SkeletonPrice />
            </Skeletondiv>
            <Skeletondiv>
              <SkeletonDesign />
              <SkeletonTitle />
              <SkeletonPrice />
            </Skeletondiv>
            <Skeletondiv>
              <SkeletonDesign />
              <SkeletonTitle />
              <SkeletonPrice />
            </Skeletondiv>
            <Skeletondiv>
              <SkeletonDesign />
              <SkeletonTitle />
              <SkeletonPrice />
            </Skeletondiv>
          </ListPageRow>
          <ListPageRow>
            <Skeletondiv>
              <SkeletonDesign />
              <SkeletonTitle />
              <SkeletonPrice />
            </Skeletondiv>
            <Skeletondiv>
              <SkeletonDesign />
              <SkeletonTitle />
              <SkeletonPrice />
            </Skeletondiv>
            <Skeletondiv>
              <SkeletonDesign />
              <SkeletonTitle />
              <SkeletonPrice />
            </Skeletondiv>
            <Skeletondiv>
              <SkeletonDesign />
              <SkeletonTitle />
              <SkeletonPrice />
            </Skeletondiv>
          </ListPageRow>
        </>
      )
    }else{
      for(let i = 0; i < ObjList.length; i += 4){
        list.push(
        <>
          <ListPageRow>
            {ObjList.slice(i, i + 4).map((index,i)=>(
              <ShopObj
                key={index}
                obj={ObjList[i]}
              />
            ))}
          </ListPageRow>
        </>
        )
      }
    }
    return list;
  }

  return (
    <>
      <ListPageContainer>
        {
          renderListPage()
        }
      </ListPageContainer>
    </>
  )
}

export default ListPage