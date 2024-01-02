import React from 'react'

import { 
    BestSellarBG,
    BestSellarContainer, 
    BestSellarSlide
} from './BestSellar.style'
import Slide from '../../components/BestSellar/Slide/Slide'
import BasiliumAPI from '../../utils/Axios'

function BestSellar() {

    
    const Getdata = () => {
        BasiliumAPI.get("/product")
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <BestSellarContainer>
            <BestSellarBG>
                <BestSellarSlide>
                    <Slide />
                </BestSellarSlide>
            </BestSellarBG>
        </BestSellarContainer>   
    )
}

export default BestSellar