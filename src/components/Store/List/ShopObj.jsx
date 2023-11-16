import React, { useEffect, useState } from 'react'
import { 
    BG, 
    Card,
    Carddiv, 
    Cart,
    Heart, 
    HeartIMG, 
    ShopCard, 
    Subscription,
    Textdiv,
    Title
} from '../../styles/List/ShopObj.style'
import { useNavigate } from 'react-router-dom'

function ShopObj(props) {
    const navi = useNavigate();
    // 이거 BackEnd class 랑 나열
    const [GoodsObj, setGoodsObj] = useState({
        "ImageUrl": "",
        "ProductId": 0,
        "GoodsName": "",
        "GoodsCategoryId": 0,
        "GoodsPrice": "",
        "GoodsHeart": false,
    })
    
    const [UserData, setUserData] = useState({
        "UserID" : 0,
        "ProductID" : 0,
        "OnHeart": false,
        "OnCart": false,
    }); 

    const onClickProduct = () => {
        navi(`/Goods/${props.obj.ProductId}`);
    }

    const OnclickHeart = (e) => {
        e.preventDefault()
        let isHeart = !e.target.onHeart
        let isCart = e.target.onCart
        setUserData({
            "UserID" : 0,
            "ProductID" : e.target.productID,
            "OnHeart": isHeart,
            "OnCart": isCart
        })
    }

    const OnclickCart = (e) => {
        e.preventDefault()
        let isHeart = e.target.onHeart
        let isCart = !e.target.onCart
        setUserData({
            "UserID" : 0,
            "ProductID" : e.target.productID,
            "OnHeart": isHeart,
            "OnCart": isCart
        })
    }
    
    useEffect(() => {
        setGoodsObj({
            "ImageUrl": props.src,
            "ProductId": props.obj.ProductId,
            "GoodsName" : props.obj.ProductName,
            "GoodsCategoryId": props.obj.ProductCategoryId,
            "GoodsPrice": props.obj.ProductPrice,
            "GoodsHeart": false,
        })
    }, [props])

    return (
        <BG
            onClick={onClickProduct}
        >
            <Carddiv>
                <Card
                    src={GoodsObj.ImageUrl}
                    alt={GoodsObj.GoodsName}
                />
                <Heart
                    onClick={OnclickHeart}
                >
                    <HeartIMG />
                </Heart>
                <Cart
                    onClick={OnclickCart}
                >
                    <ShopCard />
                </Cart>
            </Carddiv>
            <Textdiv>
                <Title>{GoodsObj.GoodsName}</Title>
                <Subscription>{GoodsObj.GoodsPrice}</Subscription>
            </Textdiv>
        </BG>
    )
}

export default ShopObj