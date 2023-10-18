import React, { 
  useEffect,
  useState
} from 'react'

import { 
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
  ExitBtn,
  ListPageContainer, 
  ListPageRow, 
  ModalBG, 
  ModalBackDrop, 
  ModalBtn, 
  ModalContainer,
  ModalView
} from '../../styles/ShoppingList/ListPage.style'
import 'react-loading-skeleton/dist/skeleton.css'
import { 
  ReactComponent as CategorySVG 
} from '../../../assets/SVG/category.svg'
import Pagination from './Pagination/Pagination'

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
  // Related with loading
  const [isLoading, setIsLoading] = useState(false)
  // Related with Object List
  const [ObjList, setObjList] = useState([
    {
      "ImageUrl": "",
      "GoodsName": "청자켓",
      "ProductID" : -1,
      "GoodsCategory": 1,
      "GoodsPrice": "45000",
      "GoodsHeart": false,
    },
    {
      "ImageUrl": "none",
      "GoodsName": "블라우스",
      "ProductID" : -1,
      "GoodsCategory": 2,
      "GoodsPrice": 50000,
      "GoodsHeart": false,
    },
    {
      "ImageUrl": "none",
      "GoodsName" : "신발",
      "ProductID" : -1,
      "GoodsCategory" : 3,
      "GoodsPrice": 35000,
      "GoodsHeart": false,
    },
    {
      "ImageUrl" : "none",
      "GoodsName": "흰 셔츠",
      "ProductID" : -1,
      "GoodsCategory": 4,
      "GoodsPrice" : 37000,
      "GoodsHeart": false,
    },
    {
      "ImageUrl" : "none",
      "GoodsName": "블랙 티셔츠",
      "ProductID" : -1,
      "GoodsCategory": 5,
      "GoodsPrice" : 33000,
      "GoodsHeart": false,
    },
    {
      "ImageUrl" : "none",
      "GoodsName": "흰색 박스티",
      "ProductID" : -1,
      "GoodsCategory" : 6,
      "GoodsPrice" : 56000,
      "GoodsHeart": false,
    },
    {
      "ImageUrl" : "none",
      "GoodsName": "블랙 박스티",
      "ProductID" : -1,
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
  // Related to Images
  const [ImageCount, setImageCount] = useState(0)
  const [ImagesList, setImagesList] = useState([])
  const [ShowImageList, SetShowImageList] = useState([])

  // Related with Pagination
  const [contentInfo, setContentInfo] = useState([])

  // Related with ProductID
  const [ProductID, setProductID] = useState(0)

  function GetItemImage({ item }){
     // ImageURL Change
    useEffect(() => {
      fetch(`${base_url}/products/downloadProductPhotos/${item.productId}?num=1`, {
        responseType: "arraybuffer",
      })
        .then((res) => res.blob())
        .then((res) => {
          var file = new File([res], res.type);
          onImageDownload(file);
        });
      // .then((res) => res.json())
      // .then((res) => {});
    }, [item.productId]);

    const [imageSrc, setImageSrc] = useState(null);

    const onImageDownload = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
      };
    };
    return(
      <img
        src={imageSrc}
        alt="product"
      />
    )
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
              />
            ))}
          </ListPageRow>
        </>
        )
      }
    }
    return list;
  }

  /* Modal 관련 컴포넌트 */
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen)
  }

  function renderModal(){
    return (
      <>
        { isOpen ?
          <ModalBG onClick={openModalHandler}>
            <ModalBackDrop onClick={openModalHandler}>
              <ModalView onClick={(e)=> e.stopPropagation()}>
                <ExitBtn onClick={openModalHandler}>
                  x
                </ExitBtn>
              </ModalView>
            </ModalBackDrop>
          </ModalBG>
          : null
        }
      </>
    )
  }

  // Category 관련 컴포넌트
  function renderCategory(){
    let ctg = props.id;
    console.log(ctg)
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
      <Pagination />
    </ContentBox>
  )
}

export default ListPage