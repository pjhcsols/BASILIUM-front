import React, { 
  useEffect, 
  useRef, 
  useState
} from 'react'

import { ListPageContainer } from '../../styles/ShoppingList/ListPage.style'
import { CountingAPI, DownloadFiles } from '../../Backend/Axios'
import Loading from '../../Loading'
import ShopObj from './ShopObj'

function ListPage(props) {
  // Related with loading
  const [isLoading, setIsLoading] = useState(null)
  
  // Related with Object List
  const [ObjList, setObjList] = useState([])

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
    setIsLoading(true)
    DownloadImageFunction()
    setObjList(Array(ImageCount).fill(null).map((_,index) => index))
    ImageEncoding()
  }, [])

  return (
    <>
      { isLoading ? 
        <Loading /> : 
        <ListPageContainer>
          {ObjList.map((index)=>(
            <ShopObj 
              obj={ShowImageList[index]}
            />
          ))}
        </ListPageContainer>
      }
    </>
  )
}

export default ListPage