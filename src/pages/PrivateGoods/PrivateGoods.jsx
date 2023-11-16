import React, { useEffect, useState } from 'react'
import { 
    GoodsBack 
} from '../../styles/PrivateGoods/PrivateGoods.style'
import { 
    BasiliumAPI 
} from '../../components/Backend/Axios';
import { 
    useParams,
} from 'react-router-dom';
import GoodsSubscription from '../../components/PrivateGoods/GoodsSubscription';
import GoodsDetail from '../../components/PrivateGoods/GoodsDetail';
import Header from '../../components/Header/header';

function PrivateGoods() {
    const params = useParams();
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [postid, setPostId] = useState(0);
    const [ProductInfo, setProductInfo] = useState({
        'ProductId' : params.index,
        'ProductName' : 'Default',
        'ProductPrice': '10000',
        'ProductCategoryId': 0,
        'ProductDesc': 'This is Default value',
    });
    const [UserInfo, setUserInfo] = useState({
        'UserID': 0,
        'IsHeart': false,
        'IsCart': false
    });
    console.log(ProductInfo.ProductId);

    const GetInformation = () => {
        BasiliumAPI
            .get(`/products/${ProductInfo.ProductId}`)
            .then(data=>{
                setProductInfo({
                    'ProductName' : data.productName,
                    'ProductPrice' : data.productPrice,
                    'ProductCategoryId' : data.productCategory,
                    'ProductDesc' : data.productDesc,
                })
            })
            .catch(err=>{
                console.log(err)
            })
        BasiliumAPI
            .get(`/likeinfos?user=${UserInfo.UserID}`)
            .then(data => {
                setUserInfo({
                    'IsHeart' : data.likeService,
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }

    useEffect(()=>{
        GetInformation();
        const urlParam = new URLSearchParams(window.location.search);
        const newPostID = urlParam.get('categoryid')
        setPostId(newPostID);
        const handleScroll = () => {
            if(window.scrollY > 1){
                setIsScrollingDown(true);
            }else{
                setIsScrollingDown(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[params])

    return (
        <>
            <Header 
                setPostId={postid}
                isScroll={isScrollingDown}
            />
            <GoodsBack>
                <GoodsSubscription 
                    ProductId={ProductInfo.ProductId}
                    ProductName={ProductInfo.ProductName}
                    ProductPrice={ProductInfo.ProductPrice}
                    ProductDesc={ProductInfo.ProductDesc}
                    ProductCategoryId={ProductInfo.ProductCategoryId}
                    ProductIsHeart={UserInfo.IsHeart}
                />
                <GoodsDetail 
                    productId={ProductInfo.ProductId}
                />
            </GoodsBack>
        </>
    )
}

export default PrivateGoods