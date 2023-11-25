import React, { useEffect, useState } from 'react'

/* Style Control */
import { 
    PaginationContainer,
    ProductRow,
    ShoppingBox,
    ShoppingContainer 
} from './ShopingList.style'

/* Components of this page */
import ShoppingProductObj from '../../components/Shopping/ProductObj/ShoppingProductObj';

/* API */
import { 
    BasiliumAPI
} from '../../Backend/Axios';
import Pagination from '../../components/Shopping/Pagination/Pagination';

const Max_count = 16;

function ShopingList() {
    
    const [PageCategory, setPageCategory] = useState(0);
    const [ProductInfos, setProductInfos] = useState([]);
    const [Product, setProduct] = useState({
        'productId': 0,
        'productCategoryId' : 0,
        'productName': '',
        'productPrice': 0,
        'productDesc': '',
    });

    const [ProductCount, setProductCount] = useState(0);

    const ProductShow = () => {
        let list = [];
        for(let i = 0;i < ProductCount/4; i++){
            if(Max_count > ProductCount)
                break;

            list.push(
                <ProductRow>
                    {
                        ProductInfos.forEach((value, i)=>(
                            <ShoppingProductObj 
                                key={i}
                                props={value}
                            />
                        ))
                    }
                </ProductRow>
            )
        }
        return list;
    };

    const CountingProducts = () => {
        BasiliumAPI
            .get('/products/counts')
            .then(data => {
                setProductCount(data.count);
            })
            .catch(err=>{
                console.log(err);
            })
    };

    const GetProducts = () => {
        BasiliumAPI
            .get('/products/allProduct')
            .then(data => {
                data.forEach((value, i)=>{
                    setProduct(JSON.stringify(value));
                    setProductInfos((lived)=>[...lived, Product]);
                });
            })
            .catch(err=>{
                console.log(err);
            })
    }

    useEffect(()=>{
        CountingProducts();
        GetProducts();
    }, [PageCategory])

    return (
        <ShoppingContainer>
            <ShoppingBox>
            {
                ProductShow()
            }
            </ShoppingBox>
            <PaginationContainer>
                <Pagination 
                    count={ProductCount}
                />
            </PaginationContainer>
        </ShoppingContainer>      
    )
}

export default ShopingList