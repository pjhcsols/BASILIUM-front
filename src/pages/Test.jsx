import React, { useEffect, useRef, useState } from 'react'
import * as S from './Inputform.style.jsx'
import { BasiliumAPI } from '../components/Backend/Axios.jsx';

function Test() {
    const ImageRef = useRef();
    const [IsLoading, setIsLoading] = useState(false);
    const [data, setdata] = useState();
    const [MulObj, setMulObj] = useState({
        productCategoryId: 1,
        productName: "asd",
        productPrice: 0,
        productDesc: "asd",
        main64Images: [""],
        sub64Images: [""],
    });

    const onClickImage = () => {
        ImageRef.current?.click();
    }

    const encodeImagefile = (fileblob) => {
        setIsLoading(!IsLoading);
    };

    // 단일로 진행하도록 함.
    const onChangeImage = (e) => {
        if(!e.target.files){
            alert("이미지가 없습니다!!");
            return ;
        }
        const imagefile = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setMulObj((prevMulObj) => ({
            ...prevMulObj,
            main64Images: [...prevMulObj.main64Images, reader.result.split(',')[1]],
            // main64Images: [...prevMulObj.main64Images, 'dasdasdasd']
            }));
            
        };
        reader.readAsDataURL(imagefile);
    }

    useEffect(()=>{
        console.log(data);
    }, [data]);

    const onClickCheck = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("productCategoryId", MulObj.productCategoryId);
        formdata.append("productName", MulObj.productName);
        formdata.append("productPrice", MulObj.productPrice);
        formdata.append("productDesc", MulObj.productDesc);
        MulObj.main64Images.forEach((file, index) => {
            formdata.append(`main64Images[${index}]`, file);
        });
        MulObj.sub64Images.forEach((file, index) => {
            formdata.append(`sub64Images[${index}]`, file);
        });

        for(let key of formdata.keys()){
            console.log(key, ":", formdata.get(key));
        }
        BasiliumAPI.post('/products/create', formdata)
            .then(data=>{
                if(data.status===400){
                    console.log("잘못 보내졌네요.. 수정할게요..");
                }else if(data.status===201){
                    alert("라면 물이 보내졌어요!");
                }
            })
            .catch(err=>{
                console.log(err);
            });
    }

    return (
        <S.InputformBox>
            <S.FormBox>
                <S.InputFormBtn 
                    onClick={onClickImage}
                />
                <S.InputForm 
                    type="file" 
                    accept='.png, .jpg, .jpeg' 
                    ref={ImageRef}
                    onChange={onChangeImage}
                    id="Imagefile"
                    required
                />
                <S.DescriptionBox>
                    <S.DescriptionText size="40px" weight="bold" color="black">
                        물 넣어주실래요?
                    </S.DescriptionText>
                </S.DescriptionBox>
            </S.FormBox>
            <S.CheckBtn onClick={onClickCheck}>
                물량 확인!
            </S.CheckBtn>
        </S.InputformBox>
    )
}

export default Test