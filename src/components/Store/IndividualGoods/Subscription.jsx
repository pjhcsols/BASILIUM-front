import React from 'react'
import { 
    ButtonNav,
    ExplainBox,
    ExplainIMG,
    SubscriptionContainer
} from '../../styles/IndividualGoods/Subscription.style'
import { NavLink } from 'react-router-dom'

function Subscription(props) {
    const count = props.count
    return (
        <SubscriptionContainer>
            <ButtonNav>
                <NavLink>
                    <ButtonText>상세정보</ButtonText>
                </NavLink>
                <NavLink>
                    <ButtonText>리뷰</ButtonText>
                </NavLink>
                <NavLink>
                    <ButtonText>Q&A</ButtonText>
                </NavLink>
                <NavLink>
                    <ButtonText>반품&교환정보</ButtonText>
                </NavLink>
            </ButtonNav>
            <ExplainBox>
                <ExplainIMG 
                
                />
            </ExplainBox>
        </SubscriptionContainer>
    )
}

export default Subscription