import React, { useEffect } from 'react'
import { 
    CategoryBox,
    ProductBorder, 
    ProductContainer, 
    ProductText
} from './Product.style';
import { 
    BasiliumAPI 
} from '../../Backend/Axios';
import { Category } from '../../public/Category';
import Explain from '../../components/Product/Explain/Explain';
import Detail from '../../components/Product/Detail/Detail';

function Product() {
    const [CategoryName, setCategoryName] = useState('');
    const [Product, setProduct] = useState({
        'productId': 0,
        'productCategoryId' : 0,
        'productName': '',
        'productPrice': 0,
        'productDesc': '',
        'imagePath': '',
    });

    const GetProductInfo = () => {
        BasiliumAPI
            .get('/products/allproduct')
            .then(data => {
                setProduct(data);
            })
            .catch(err=>{
                console.log(err);
            })
    }

    useEffect(()=>{
        GetProductInfo();
        setCategoryName(Category.data[Product.productCategoryId]);
    },[])

    return (
        <ProductContainer>
            <ProductBorder>
                <ProductText>
                    {Product.productName}
                </ProductText>
                <CategoryBox>
                    {CategoryName}
                </CategoryBox>
                <Explain />
            </ProductBorder>
            <Detail />
        </ProductContainer>
    )
}

export default Product