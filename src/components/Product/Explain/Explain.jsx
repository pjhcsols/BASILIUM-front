import React from 'react'
import { 
    ExplainBox, 
    ImgBox, 
    LeftBox, 
    ProductText, 
    RightBox,
    TextBox,
    BoxBox,
    HeartBox,
    HeartImg,
    ShareBox,
    ShareImg
} from './Explain.style'

function Explain(props) {

    const onClickCart = (e) => {
        e.preventDefault();
    };

    const onClickBuy = (e) => {
        e.preventDefault();
    };


    return (
        <ExplainBox>
            <LeftBox>
                <ImgBox 
                    src={props.data.src}
                />
            </LeftBox>
            <RightBox>
                <TextBox>
                    <ProductText>
                        {props.data.ProductName}
                    </ProductText>
                    <ProductText>
                        {props.data.ProductPrice}
                    </ProductText>
                    <ProductText>
                        {props.data.ProductDesc}
                    </ProductText>
                </TextBox>
                <BoxBox>
                    <HeartBox>
                        <HeartImg />
                    </HeartBox>
                    <ShareBox>
                        <ShareImg />
                    </ShareBox>
                </BoxBox>
            </RightBox>
        </ExplainBox>
    )
}

export default Explain