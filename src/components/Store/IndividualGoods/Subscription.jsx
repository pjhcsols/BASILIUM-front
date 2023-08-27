import React from 'react'
import { 
    ButtonNav,
    ExplainBox,
    ExplainIMG,
    SubscriptionContainer
} from '../../styles/IndividualGoods/Subscription.style'

function Subscription(props) {
    const count = props.count
    return (
        <SubscriptionContainer>
            <ButtonNav>
                <ButtonText>상세정보</ButtonText>
                <ButtonText>리뷰</ButtonText>
                <ButtonText>Q&A</ButtonText>
                <ButtonText>반품&교환정보</ButtonText>
            </ButtonNav>
            <ExplainBox>
                <ExplainIMG 
                
                />
            </ExplainBox>
        </SubscriptionContainer>
    )
}

export default Subscription