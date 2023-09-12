import React, { useState, useEffect } from 'react'

import BestSellarContent from './BestSellarContent'
import BestSellarAPI from '../Backend/Axios'
import Loading from '../Loading'

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
    const [isLoading, setIsLoading] = useState(true)
    
    const [BestSellarList, setBestSellarList] = useState([])

    const GetBestSellar = () => {
        BestSellarAPI
            .get('/product/bestsellar')
            .then(data => {
                const DataList = Array.from(data)
                setBestSellarList(DataList)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(()=>{
        GetBestSellar()
    }, [])

    return (
        <>
            {
            isLoading ?
            <Loading />
            :
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
                                    "color": "black",
                                }}
                                className='swiper-button-prev'
                            />
                        </LeftButtonContainer>
                        
                        <RightButtonContainer>
                            <RightButton 
                                style={{
                                    "color":"black"
                                }}
                                className='swiper-button-next'
                            />
                        </RightButtonContainer>
                    </ButtonContainer>
                </Swiper>
            </SlideBar>
            }
        </>
        
    )
}

export default BestSellarBar