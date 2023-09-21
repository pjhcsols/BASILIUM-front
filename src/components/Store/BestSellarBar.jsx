import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import BestSellarContent from './BestSellarContent'
import BestSellarAPI, { DownloadFiles, base_url } from '../Backend/Axios'
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
    
    const [BestSellarList, setBestSellarList] = useState([{
        "productID" : null,
        "productCategoryId" : '',
        "productName": '',
        "productPrice" : 0,
        "productDesc": '',
    }])
    const [BestSellarLen, setBestSellarLen] = useState(0)

    const GetBestSellar = () => {
        BestSellarAPI
            .get('/products/bestSelling')
            .then(data => {
                setBestSellarList(data.data)
                data.data.forEach((item, i)=>(
                    UploadImageFile(item)
                ))
            })
            .catch(error => {
                console.log(error)
            })
    }

    // ImagesList 
    const [ShowImageList, SetShowImageList] = useState()

    // According to Axios, Post some Image data.
    const reader = new FileReader()

    // Using blob
    const ImageEncoding = (images) =>{
        reader.readAsDataURL(images)
        reader.onload = () => {
            console.log(reader.result)
            SetShowImageList(reader.result || null)
        }
        setIsLoading(false)
    }

    const UploadImageFile = (item) => {
        fetch(`${base_url}/products/downloadProductPhotos/${item.productId}?num=1`, {
            responseType: "arraybuffer",
          })
            .then((res) => res.blob())
            .then((res) => {
              var file = new File([res], res.type);
              ImageEncoding(file);
         });
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
                    {
                        BestSellarList.map((bestSellarList, index) => (
                                <SwiperContainer key={index}>
                                    <BSlide>
                                        <BestSellarContent
                                            src={ShowImageList}
                                            title={bestSellarList.productName}
                                            contnet={bestSellarList.productDesc}
                                            price={bestSellarList.productPrice}
                                        />
                                    </BSlide>
                                </SwiperContainer>
                        ))
                    }
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