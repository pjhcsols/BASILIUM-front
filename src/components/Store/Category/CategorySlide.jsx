import React from 'react'
import CategoryBox from './CategoryBox'
import { 
    ExBg,
    NextButtonBox,
    PrevButtonBox,
    SlideBox
} from '../../styles/Store/Category/CategorySlide.style'

import Huku from '../../../assets/Goods/Huku.jpeg'
import GrayHuku from '../../../assets/Goods/GrayHuku.jpeg'
import WhiteHat from '../../../assets/Goods/WhiteHat.jpeg'

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

import { ReactComponent as PrevButton} from '../../../assets/SVG/caret-back-outline.svg';
import { ReactComponent as NextButton} from '../../../assets/SVG/caret-forward-outline.svg';

function CategorySlide() {
  return (
    <>
        <ExBg>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centerSlides={true}
                loop={true}
                slidesPerview={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                }}
                style={{
                    'width': '100%',
                    'height': '100%'
                }}
                pagination={{ el: '.swiper-pagination', clickable:'true'}}
                navigation={{
                    nextEl: '.swiper-button-next-category',
                    prevEl: '.swiper-button-prev-category',
                    clickable: true
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
            >
                <SlideBox>
                    <CategoryBox 
                        src={Huku}
                        category={"Upper"}
                        content={"상의"}
                    />
                </SlideBox>
                <SlideBox>
                    <CategoryBox 
                        src={GrayHuku}
                        category={"Under"}
                        content={"하의"}
                    />
                </SlideBox>
                <SlideBox>
                    <CategoryBox 
                        src={WhiteHat}
                        category={"Hat"}
                        content={"모자"}
                    />
                </SlideBox>
                <SlideBox>
                    <CategoryBox />
                </SlideBox>
                <SlideBox>
                    <CategoryBox />
                </SlideBox>
                <SlideBox>
                    <CategoryBox />
                </SlideBox>
                <PrevButtonBox>
                    <PrevButton className='swiper-button-prev-category'/>
                </PrevButtonBox>
                <NextButtonBox>
                    <NextButton className='swiper-button-next-category'/>
                </NextButtonBox>
            </Swiper>
        </ExBg>
    </>
  )
}

export default CategorySlide