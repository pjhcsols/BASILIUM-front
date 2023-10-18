import React, { useEffect, useState } from 'react'
import { ExplainAPI, QnaAPI, RequestInfoAPI, ReviewAPI } from '../../Backend/Axios'
import { BtnBox, BtnContainer, ExplainBG, OpenBtn, SubscriptionBox } from '../../styles/IndividualGoods/Explain.style'

function Explain() {
    const [ExplainObj, setExplainObj] = useState({
        "productID": 0,
    })

    const GetSubscription = () => {
        ExplainAPI
            .get(`/${ExplainObj.productID}`)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onClickQnA = (e) => {
        e.preventDefualt()
        QnaAPI
            .get(`/${ExplainObj.productID}`)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onClickDetail = (e) => {
        e.preventDefualt()
        ExplainAPI
            .get(`/${ExplainObj.productID}`)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onClickRequestInfo = (e) => {
        e.preventDefualt()
        RequestInfoAPI
            .get(`/${ExplainObj.productID}`)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    const onClickReview = (e) => {
        e.preventDefualt()
        ReviewAPI
            .get(`/${ExplainObj.productID}`)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    // useEffect(()=>{
    //     GetSubscription()
    // }, [])
    
    return (
        <ExplainBG>
            <BtnContainer>
                <BtnBox>
                    상세정보
                </BtnBox>
                <BtnBox>
                    리뷰
                </BtnBox>
                <BtnBox>
                    Q&A
                </BtnBox>
                <BtnBox>
                    반품 & 교환정보
                </BtnBox>
            </BtnContainer>
            <SubscriptionBox>
                <OpenBtn />
            </SubscriptionBox>
        </ExplainBG>
    )
}

export default Explain