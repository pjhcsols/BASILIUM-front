import React from 'react'
import CategoryBox from './CategoryBox'
import { 
    ExBg 
} from '../../styles/Store/Category/CategorySlide.style'


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
                    modifier: 2.5,
                }}
            >
                <SwiperSlide>
                    <CategoryBox />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryBox />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryBox />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryBox />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryBox />
                </SwiperSlide>
            </Swiper>
        </ExBg>
    </>
  )
}

export default CategorySlide