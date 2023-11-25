import React, { useState } from 'react'
import { 
    DescriptionBox,
    ImageUpload,
    ImageUploadBox,
    InputBox,
    InputLine,
    RegistrationContainer, 
    RegistrationUploadBox, 
    UploadBtn, 
    UploadText
} from './Registration.style'

import { 
    BasiliumAPI 
} from '../../Backend/Axios';

function Registration() {

    const productNameRef = useRef();
    const productPriceRef = useRef();
    const productCategoryIdRef = useRef();
    const productDescRef = useRef();
    const productImageRef = useRef();

    const [Product, setProduct] = useState({
        'productName': '',
        'productPrice': '',
        'productCategoryId' : 0,
        'productDesc' : '',
        'imagePath' : ''
    });

    const InputInfo = [
        {
            'Info' : '상품 이름',
            'height' : '100px',
            'size': '25px',
            'ref' : productNameRef
        },
        {
            'Info': '상품 가격',
            'height': '100px',
            'size': '25px',
            'ref': productPriceRef
        },
        {
            'Info': '상품 설명',
            'height': '300px',
            'size': '25px',
            'ref': productDescRef,
        },
        {
            'Info': '상품 카테고리',
            'height': '100px',
            'size': '25px',
            'ref': productCategoryIdRef
        },
    ]

    const InputColumn = () => {
        let list = [];
        InputInfo.forEach((value,i)=>{
            <InputBox
                height={value.height}
                key={i}
            >
                <UploadText
                    size={value.size}
                >
                    {value.Info}
                </UploadText>
                <InputLine 
                    height={value.height-10}
                    ref={value.ref}
                />
            </InputBox>
        })
        return list;
    }

    const UploadProduct = () => {
        BasiliumAPI
            .post('/product', Product)
            .then(data=>{
                console.log(data);
                alert('상품 등록에 완료하였습니다.');
            })
            .catch(err=>{
                console.log(err);
                alert('상품 등록에 실패하였습니다.');
            })
    };

    const onClickUpload = (e) => {
        e.preventDefault();
        UploadProduct();
    };
    
    
    return (
        <RegistrationContainer>
            <RegistrationUploadBox>
                <ImageUploadBox>
                    <ImageUpload 

                    />
                </ImageUploadBox>
            </RegistrationUploadBox>
            <DescriptionBox>
                {
                    InputColumn()
                }
                <UploadBtn />
            </DescriptionBox>
        </RegistrationContainer>
    )
}

export default Registration