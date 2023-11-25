import React from 'react'
import { 
    CartBox,
    CartIMG,
    HeartBox,
    HeartIMG,
    ProductBox, 
    ProductIMG, 
    ProductIMGBox, 
    ProductText, 
    ProductTextBox
} from './ShoppingProductObj.style'

function ShoppingProductObj(props) {
    const onClickHeart = (e) => {
        e.preventDefault();
    }

    const onClickCart = (e) => {
        e.preventDefault();
    }

    return (
        <ProductBox>
            <ProductIMGBox>
                <ProductIMG
                    src={props.src}
                />
                <HeartBox>
                    <HeartIMG />
                </HeartBox>
                <CartBox>
                    <CartIMG />
                </CartBox>
            </ProductIMGBox>
            <ProductTextBox>
                <ProductText
                    style={{
                        "font-size" : "18px",
                    }}
                >
                    {props.ProductName}
                </ProductText>
                <ProductText
                    style={{
                        "font-size" : "12px",
                        "font-weight" : "lighter",
                    }}
                >
                    {props.ProductPrice}
                </ProductText>
            </ProductTextBox>
        </ProductBox>
    )
}

export default ShoppingProductObj