import React from 'react'

import BestSellarObj from './BestsellarObj'
import ManToMan from '../../assets/Goods/ManToMan.jpg'

import { Swiper, SwiperSlide } from "swiper/react"
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
  BestSellarContainer 
} from '../styles/Store/BestSellar/BestSellar.style'
import { BSlide, ButtonContainer, LeftButtonContainer, RightButtonContainer, SwiperContainer } from '../styles/Store/BestSellar/BestSellarBar.style'

function BestsellarBar() {
  return (
    <>
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
                modifier: 2.5
        }}
        style={{
            'width': '100%',
            'height': '100%'
        }}
        pagination={{ el: '.swiper-pagination', clickable:'true'}}
        navigation={{
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-prev',
            clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
    >
        <SwiperContainer>
            <BSlide>
                <BestsellarContent />
            </BSlide>
        </SwiperContainer>
        <SwiperContainer>
            <BSlide>
                <BestsellarContent />
            </BSlide>
        </SwiperContainer>
        <SwiperContainer>
            <BSlide>
                <BestsellarContent />
            </BSlide>
        </SwiperContainer>
        <ButtonContainer>
            <LeftButtonContainer>
                <LeftButtonContainer 
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
    </>
  )
}

export default BestsellarBar