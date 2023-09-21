import React, { useEffect, useState } from 'react'
import { BuyingAPI } from '../Backend/Axios'
import { 
    BuyBtn,
    BuyingPageBG, 
    CancelBtn, 
    CollectBtn, 
    ObjText, 
    ShopImgBox, 
    ShopObj, 
    ShopObjBox, 
    ShopObjContainer,
    ButtonContainer,
    Textdiv,
    BuyingHeader
} from '../styles/Purchase/Purchase.style'

function Purchase() {
    const [IsLoading, SetIsLoading] = useState(true)
    const [ShopListObj, SetShopListObj] = useState([])
    const [SelectedObj, SetSelectedObj] = useState([])
    const [TotalPrice, SetTotalPrice] = useState(0)
    const [TotalGoods, SetTotalGoods] = useState(0)

    const onClickSelect = (item) => {
        SetSelectedObj([...item])
    }

    const GetBuyObj = () => {
        BuyingAPI.get('/product/buying')
            .then(data => {
                const ObjList = Array.from(JSON.stringify(data))
                SetShopListObj(ObjList)
                const sum = ObjList.reduce((acc, curr)=> acc + curr, 0)
                SetTotalPrice(sum)
                SetTotalGoods(ObjList.length)
                SetIsLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const onClickBuyBtn = () => {
        BuyingAPI.post('/product/userid', SelectedObj)
            .then(data => {
                alert('상품을 구매합니다.')
            })
            .catch(error => {
                alert('상품을 구매할 수가 없습니다.')
            })
    }

    const onClickCanceclObj = () => {
        // The product's userid is essential to update Object. 
        BuyingAPI.post('/product/userid', ShopListObj)
            .then(data => {
                alert('상품을 취소하였습니다.')
            })
            .catch(error => {
                alert('응답을 받아오지 못하였습니다.')
            })
    }

    useEffect(()=>{
        GetBuyObj()
    }, [])

    return (
        <>
            <BuyingHeader>

            </BuyingHeader>
            <BuyingPageBG>
                <ShopObjContainer>
                    <ShopObjBox>
                        { 
                            ShopListObj.map((item, index)=>(
                                <ShopObj key={index}>
                                    <ShopImgBox />
                                    <ObjText>
                                        {item.Objname}
                                    </ObjText>
                                    <ObjText>
                                        {item.Objprice}
                                    </ObjText>
                                    <CollectBtn 
                                        onClick={onClickSelect()}
                                    />
                                </ShopObj>
                            ))
                        }
                    </ShopObjBox>
                </ShopObjContainer>
                <ButtonContainer>
                    <Textdiv>
                        <ObjText>
                            {TotalPrice}
                        </ObjText>
                        <ObjText>
                            {TotalGoods}
                        </ObjText>
                    </Textdiv>
                    <BuyBtn
                        onClick={onClickBuyBtn()}
                    />
                    <CancelBtn 
                        onClick={onClickCanceclObj()}
                    />
                </ButtonContainer>
            </BuyingPageBG>
        </>
    )
}

export default Purchase