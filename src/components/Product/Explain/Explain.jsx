import React from 'react'
import { 
    BuyBtn,
    CartBtn,
    ExplainBox, 
    ExplainBtnBox, 
    Heart, 
    Heartdiv, 
    LeftBox, 
    ProductText, 
    RightBox,
    Share,
    Sharediv
} from './Explain.style'

function Explain(props) {
    return (
        <ExplainBox>
            <LeftBox />
            <RightBox>
                <Heartdiv>
                    <Heart />
                </Heartdiv>
                <Sharediv>
                    <Share />
                </Sharediv>
                <ProductText
                    size="25px"
                    weight="bolder"
                >
                    {props.object.productName}
                </ProductText>
                <ProductText
                    size="20px"
                    weight="lighter"
                >
                    {props.object.productPrice}
                </ProductText>
                <ProductText
                    size="25px"
                    weight="bolder"
                >
                    {props.object.productDesc}
                </ProductText>
                <ExplainBtnBox>
                    <CartBtn>
                        장바구니
                    </CartBtn>
                    <BuyBtn>
                        바로구매
                    </BuyBtn>
                </ExplainBtnBox>
            </RightBox>
        </ExplainBox>
    )
}

export default Explain