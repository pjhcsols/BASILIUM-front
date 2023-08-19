import React from 'react'

import BestSellarContent from './BestSellarContent'

import { Swiper } from "swiper/react"
import {
    EffectCoverflow,
    Pagination,
    Navigation 
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { 
    BSlide,
    ButtonContainer, 
    LeftButtonContainer, 
    RightButtonContainer, 
    SlideBar, 
    SwiperContainer 
} from '../styles/Store/BestSellar/BestSellarBar.style'
import { ReactComponent as LeftButton } from '../../assets/SVG/arrow-back-outline.svg'
import { ReactComponent as RightButton } from '../../assets/SVG/arrow-forward-outline.svg'


function BestSellarBar() {
    return (
        <SlideBar>
            <Swiper
                effect={ 'coverflow' }
                grabCursor={ true }
                centeredSlides={ true }
                loop={ true }
                slidesPerView={ 'auto' }
                coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 0
                }}
                style={{
                    'width': '100%',
                    'height': '100%'
                }}
                pagination={{ el: '.swiper-pagination', clickable:'true'}}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
            >
                <SwiperContainer>
                    <BSlide>
                        <BestSellarContent />
                    </BSlide>
                </SwiperContainer>
                <SwiperContainer>
                    <BSlide>
                        <BestSellarContent />
                    </BSlide>
                </SwiperContainer>
                <SwiperContainer>
                    <BSlide>
                        <BestSellarContent />
                    </BSlide>
                </SwiperContainer>

                <ButtonContainer>
                    <LeftButtonContainer>
                        <LeftButton
                            style={{
                                "color": "white",
                            }}
                            className='swiper-button-prev'
                        />
                    </LeftButtonContainer>
                    
                    <RightButtonContainer>
                        <RightButton 
                            style={{
                                "color":"white"
                            }}
                            className='swiper-button-next'
                        />
                    </RightButtonContainer>
                </ButtonContainer>
            </Swiper>
        </SlideBar>
    )
}

export default BestSellarBar