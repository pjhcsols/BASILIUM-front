import React, { useCallback, useState } from 'react'
import { 
    BG, 
    ButtonContainer, 
    ClearBtn, 
    FormContainer, 
    INPUT, 
    ImgContainer, 
    ImgUpload, 
    InputBox, 
    InputContainer, 
    SubmitBtn, 
    Texture
} from '../styles/Admin/Listing.style'
import axios from 'axios'
import { useRef } from 'react'

function Listing() {
    const Shopname = useRef()
    const Brandname = useRef()
    const [shop, Setshop] = useState({
        Brands:{
            name: "",
            goods: "",
        }
    });

    const GoodsChange = event => {
        const value = event.target.value
        Setshop({
            Brands: {
                name: value
            }
        })
    }

    const BrandChange = event => {
        const value = event.target.value
        Setshop({
            Brands: {
                goods: value
            }
        })
    }

    const ClearonClick = (e) => {
        e.preventDefault()
    }

    const SubmitonClick = useCallback((e) => {
        if(!e.target.files){
            return ;
        }

        const formdata = new FormData()
        formdata.append('image', e.target.files[0])

        axios({

        })
    })
    return (
        <BG>
            <InputContainer>
                <FormContainer action="post">
                    <InputBox>
                        <Texture>추가하고자 하는 상품</Texture>
                        <INPUT 
                            type="text"
                            value={shop.Brands.goods}
                            ref={Shopname}
                        />    
                    </InputBox>
                    <InputBox>
                        <Texture>브랜드 설정</Texture>
                        <INPUT 
                            type="text" 
                            value={shop.Brands.name}
                            onChange={BrandChange} 
                            ref={Brandname}
                        />
                    </InputBox>
                    <ImgContainer>
                        <INPUT value="파일 선택" disabled="disabled"/>
                        <label
                            value="upload" 
                            for="syasin"
                            style={{
                                "color": "white"
                            }}
                        />
                        <ImgUpload 
                            type="file"
                            id="syasin"
                        />
                    </ImgContainer>
                    <ButtonContainer>
                        <SubmitBtn value="Upload"/>
                        <ClearBtn value="Clear"/>
                    </ButtonContainer>
                </FormContainer>
            </InputContainer>
        </BG>
    )
}

export default Listing