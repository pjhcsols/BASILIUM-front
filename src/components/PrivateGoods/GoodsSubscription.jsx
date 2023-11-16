import React, { useEffect, useState } from 'react'
import { 
    Btn,
    BtnBox,
    BtnText,
    CategoryBox,
    GoodsName,
    GoodsPrice,
    HeartImg,
    IMGBox, 
    IconBox, 
    IconContainer, 
    NotHeartImg, 
    ProductContainer, 
    ProductExplain, 
    SecondBox, 
    ShareImg, 
    ShoppingCartImg, 
    SubscriptionBox, 
    SubscriptionContainer, 
    TitleBox,
    TitleSpan
} from '../../styles/PrivateGoods/GoodsSubcription.style'
import { 
    base_url 
} from '../Backend/Axios';

function GoodsSubscription(props) {
    const [ImageURL, setImageURL] = useState('');
    const [HeartClick, setHeartClick] = useState(false);
    const [CartClick,setCartClick] = useState(false);

    const onImageDownload= (file)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
           setImageURL(...reader.result || null);
        };
    };

    const onClickHeart = (e) => {
        e.preventDefault();
        setHeartClick((prev) => !prev);
    }

    const onClickCart = (e) => {
        e.preventDefault();
        setCartClick(true);

    }

    useEffect(()=>{
        setCartClick(false);
        fetch(`${base_url}/products/downloadProductPhotos/${props.ProductId}?num=1`,{
            responseType: "arraybuffer",
        })
            .then((res)=> res.blob())
            .then((res)=>{
                let file = new File([res], res.type);
                onImageDownload(file);
            })
    },[props.ProductId])

    return (
        <SubscriptionContainer>
            <TitleBox>
                <TitleSpan>
                    {props.ProductName}
                </TitleSpan>
                <CategoryBox>
                    {props.ProductCategory}
                </CategoryBox>
            </TitleBox>
            <SecondBox>
                <IMGBox>
                    <img 
                        src={ImageURL}
                        alt="ProductPhoto" 
                    />
                </IMGBox>
                <ProductContainer>
                    <ProductExplain>
                        <SubscriptionBox>
                            <span
                                style={{
                                    "color": "white",
                                    "font-family" : "Noto Sans KR",
                                    "font-weight" : "bolder",
                                    "font-size" : "25px",
                                }}
                            >
                                Product Info.
                            </span>
                            <GoodsName>
                                {props.ProductName}
                            </GoodsName>
                            <GoodsPrice>
                                {props.ProductPrice}
                            </GoodsPrice>
                            <GoodsPrice>
                                {props.ProductDesc}
                            </GoodsPrice>
                        </SubscriptionBox>
                        <IconBox>
                            <IconContainer>
                                {
                                HeartClick ? 
                                    <HeartImg
                                        onClick={onClickHeart}
                                    />
                                    :
                                    <NotHeartImg 
                                        onClick={onClickHeart}
                                    />
                                }
                            </IconContainer>
                            <IconContainer>
                                <ShareImg />
                            </IconContainer>
                        </IconBox>
                    </ProductExplain>
                    <BtnBox>
                        <Btn>
                            <ShoppingCartImg 
                                className='BtnHover'
                            />
                            <BtnText
                                className='BtnHover'
                                onClick={CartClick}
                            >
                                장바구니
                            </BtnText>
                        </Btn>
                        <Btn>
                            <BtnText>바로 구매</BtnText>
                        </Btn>
                    </BtnBox>
                </ProductContainer>
            </SecondBox>
        </SubscriptionContainer>
    )
}

export default GoodsSubscription