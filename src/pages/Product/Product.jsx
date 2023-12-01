import React, { useEffect, useState } from 'react'
import { 
    CategoryBox,
    ProductContainer, ProductTitle 
} from './Product.style'

import Explain from '../../components/Product/Explain/Explain'
import Detail from '../../components/Product/Detail/Detail'

import { 
    Category
} from '../../public/CategoryList'

function Product(props) {
    const [ProductObj, setProductObj] = useState({
        'productId': 0,
        'productCategoryId': 0,
        'productName': '',
        'productPrice': 0,
        'productDesc': '',
        'imagePath': ''
    })

    useEffect(()=>{
        setProductObj(JSON.stringify(props))
    }, [])

    return (
        <ProductContainer>
            <ProductTitle>
                {ProductObj.productName}
            </ProductTitle>
            <CategoryBox>
                {Category[ProductObj.productCategoryId + 1]}
            </CategoryBox>
            <Explain 
                object={ProductObj}
            />
            <Detail />
        </ProductContainer>
    )
}

export default Product