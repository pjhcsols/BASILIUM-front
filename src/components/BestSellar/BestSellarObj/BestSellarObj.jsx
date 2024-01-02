import React from 'react'
import * as S from './BestSellarObj.style'

function BestSellarObj(props) {
    return (
        <S.ObjBox>
            <S.ImageBox src={null}/>
            <S.DescBox>
                <span className="name-text">{props.productName}</span>
                <span className="price-text">{props.productPrice}</span>
                <span className="desc-text">{props.productDesc}</span>
            </S.DescBox>
        </S.ObjBox>
    )
}

export default BestSellarObj