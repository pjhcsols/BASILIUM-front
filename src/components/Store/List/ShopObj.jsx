import React, { useState } from 'react'
import { 
    BG, 
    Box, 
    Card, 
    Carddiv, 
    Subscription, 
    Textdiv, 
    Title 
} from '../../styles/List/ShopObj.style'

function ShopObj(props) {
    // 이거 BackEnd class 랑 나열
    const [GoodsObj, setGoodsObj] = useState({
        "ImageUrl": "",
        "GoodsName": "",
        "GoodsCategory": 0,
        "GoodsPrice": "",
        "GoodsHeart": false,
    })
    const PropsObj = props.obj
    setGoodsObj(JSON.stringify(PropsObj))
    
    return (
        <BG>
            <Box>
                <Carddiv>
                    <Card
                        src={PropsObj.ImageUrl}
                        alt={PropsObj.GoodsName}
                    />
                </Carddiv>
                <Textdiv>
                    <Title>{PropsObj.GoodsName}</Title>
                    <Subscription>{PropsObj.GoodsPrice}</Subscription>
                </Textdiv>
            </Box>
        </BG>
    )
}

export default ShopObj