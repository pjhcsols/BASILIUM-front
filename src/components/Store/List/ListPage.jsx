import React, { 
  useEffect,
  useState
} from 'react'

import { 
  BasiliumAPI,
  base_url
} from '../../Backend/Axios'

import ShopObj from './ShopObj'
import { 
  SkeletonDesign, 
  SkeletonPrice, 
  SkeletonTitle, 
  Skeletondiv
} from '../../styles/List/ShopObj.style'
import { 
  CategoryBox,
  CategoryExp,
  ContentBox,
  CtgSpan,
  ListPageContainer, 
  ListPageRow,
  PaginationBox,
} from '../../styles/ShoppingList/ListPage.style'
import 'react-loading-skeleton/dist/skeleton.css'
import Pagination from './Pagination/Pagination'
import { useParams } from 'react-router-dom'

const Category = [
  {
    "CategoryID" : 1,
    "CategoryName" : "Jacket"
  },
  {
    "CategoryID": 2,
    "CategoryName" : "Pants"
  },
  {
    "CategoryID": 3,
    "CategoryName" : "Hat"
  },
  {
    "CategoryID": 4,
    "CategoryName" : "Shoes"
  },
  {
    "CategoryID": 5,
    "CategoryName" : "Bag"
  },
  {
    "CategoryID": 6,
    "CategoryName" : "Skirt"
  },
  {
    "CategoryID": 7,
    "CategoryName" : "Underwear"
  }
];

function ListPage(props) {
  const CategoryId = useParams();

  // Related with loading
  const [isLoading, setIsLoading] = useState(false);

  // Related with Object List
  const [ObjList, setObjList] = useState([]);
  const [ProductObj, setProductObj] = useState({
    'ProductId' : 0,
    'ProductCategoryId' : 0,
    'ProductName' : '',
    'ProductPrice' : 0,
    'ProductDesc' : '',
  })

  useEffect(()=>{
    setIsLoading(true);
    console.log(CategoryId);
    BasiliumAPI
      .get(`/products/allproduct`)
      .then(data => {
        for (let i = 0; i < 4; i++) {
          const item = data.data[i];
          console.log(item);
          setProductObj({
            'ProductId': item.productId,
            'ProductCategoryId': item.productCategoryId,
            'ProductName' : item.productName,
            'ProductPrice': item.productPrice,
            'ProductDesc' : item.productDesc,
          })
          setObjList(values => [...values,ProductObj])
          GetItemImage(item.productId);
        }
        setIsLoading(false);
      })
      .catch(err=>{
        console.log(err);
      })
  },[CategoryId])

  // Related to Images
  const [ImageCount, setImageCount] = useState(0)
  const [ImagesList, setImagesList] = useState([])
  const [ShowImageList, setShowImageList] = useState([])

  const onImageDownload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setShowImageList(...reader.result || null); // 파일의 컨텐츠
    };
  };

  function GetItemImage({ item }){
    fetch(`${base_url}/products/downloadProductPhotos/${item}?num=1`, {
      responseType: "arraybuffer",
    })
      .then((res) => res.blob())
      .then((res) => {
        var file = new File([res], res.type);
        onImageDownload(file);
      });
  }

  /* 페이지 렌더링 함수 */
  function renderListPage(){
    const SkeletonBox = () => {
      return (
        <Skeletondiv>
          <SkeletonDesign />
          <SkeletonTitle />
          <SkeletonPrice />
        </Skeletondiv>
      )
    }
    var list = [];
    const count = 2;
    const repeatedSkeleton = Array.from({ length: count }, (v, index) => (
      <ListPageRow>
        <SkeletonBox />
        <SkeletonBox />
        <SkeletonBox />
        <SkeletonBox />
      </ListPageRow>
    ))

    if(isLoading){
      list.push(
        <>
          { repeatedSkeleton }
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
                src={ShowImageList[i]}
              />
            ))}
          </ListPageRow>
        </>
        )
      }
    }
    return list;
  }

  // Category 관련 컴포넌트
  function renderCategory(){
    let ctg = props.id;
    let list = [];
    list.push(
      <CategoryBox>
          <CtgSpan>
            {
              Category[ctg].CategoryName
            }
          </CtgSpan>
      </CategoryBox>
    )
    return list;
  }

  return (
    <ContentBox>
      <CategoryExp>
      {
        renderCategory()
      }
      </CategoryExp>
      <ListPageContainer>
        {
          renderListPage()
        }
      </ListPageContainer>
      <PaginationBox>
        <Pagination />
      </PaginationBox>
    </ContentBox>
  )
}

export default ListPage