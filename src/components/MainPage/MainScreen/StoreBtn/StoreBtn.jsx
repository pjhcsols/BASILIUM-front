import React from 'react'
import { 
    MarkBox,
    StoreButton, 
    StoreText, 
    StoreTextBox
} from './StoreBtn.style'

function StoreBtn(props) {
    return (
        <StoreButton onClick={props.onClick}>
            <MarkBox>
                <StoreMark />
            </MarkBox>
            <StoreTextBox>
                <StoreText>
                    Store
                </StoreText>
            </StoreTextBox>
        </StoreButton>
    )
}

export default StoreBtn