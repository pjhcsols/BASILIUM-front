import React, { useState } from 'react'

import {
    SecondPageComponent,
    TextBox,
    Text
} from '../styles/Second.style'

function SecondPage() {
    return (
        <SecondPageComponent>
            <TextBox>
                <Text>
                    Best Sellar
                </Text>
                <Text>
                    2023-08-06 ~ 2023-08-12
                </Text>
            </TextBox>
        </SecondPageComponent>
    )
}

export default SecondPage