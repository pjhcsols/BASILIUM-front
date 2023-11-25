import React from 'react'

/* Total Screen Style */
import { 
    BasiliumText,
    BtnBox,
    TextBox,
    TotalBG 
} from './TotalScreen.style'

/* React Component */
import StoreBtn from './StoreBtn/StoreBtn'

function MainScreen(props) {
    
    const BtnonClick = () => {
        e.preventDefault();
    }

    return (
        <TotalBG>
            <TextBox>
                <BasiliumText style={{
                    "font-size" : "45px",
                    "font-weight" : "bold"
                }}>
                    BASILIUM
                </BasiliumText>
                <BasiliumText style={{
                    "font-size" : "25px",
                    "font-weight" : "lighter"
                }}>
                    Basilium of the King and Queen casual & street brand
                </BasiliumText>
            </TextBox>
            <BtnBox>
                <StoreBtn onClick={BtnonClick}/>
            </BtnBox>
        </TotalBG>
    )
}

export default MainScreen