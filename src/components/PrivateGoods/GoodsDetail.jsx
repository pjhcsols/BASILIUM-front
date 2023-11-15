import React, { useEffect, useState } from 'react'
import { 
    BtnBox, 
    BtnContainer,
    DetailBox,
    BtnSpan,
    DetailContainer
} from '../../styles/PrivateGoods/GoodsDetail.style'
import { 
    BasiliumAPI, 
    base_url 
} from '../Backend/Axios';

function GoodsDetail(props) {
    /* Build up the Button Container */
    const BtnText = ['상세정보', '리뷰', 'Q&A', '반품 & 교환정보']
    const BoxContainer = () => {
        let arr = [];
        for(let i=0;i<4;i++){
            arr.push(
                <BtnBox>
                    <BtnSpan>
                        {BtnText[i]}
                    </BtnSpan>
                </BtnBox>
            )
        }
        return arr;
    }

    /* Build up the Good's Subscription Box that is consisted of Images */
    const [ImageCount, setImageCount] = useState(0);
    const [ImageUrls, setImageUrls] = useState([])

    /* We have to call the API and scrab the IMG files for data scrab */
    const onImageDownload= (file)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
           setImageUrls(...reader.result || null);
        };
    };

    const ImageContainer = () => {
        BasiliumAPI
            .get(`/products/countPhotos/${props.productId}`)
            .then(data=>{
                setImageCount(data);
            })
            .catch(err=>{
                console.log(err);
            })
    }

    useEffect(() => {
        ImageContainer();
        if(ImageCount === 1){
            fetch(`${base_url}/products/downloadProductPhotos/${props.ProductId}?num=1`,{
                responseType: "arraybuffer",
            })
                .then((res)=> res.blob())
                .then((res)=>{
                    let file = new File([res], res.type);
                    onImageDownload(file);
                })
        }
        else if(ImageCount > 1){
            for(let i = 0;i<ImageCount; i++){
                fetch(`${base_url}/products/downloadProductPhotos/${props.ProductId}?num=1`,{
                    responseType: "arraybuffer",
                })
                    .then((res)=> res.blob())
                    .then((res)=>{
                        let file = new File([res], res.type);
                        onImageDownload(file);
                    })
            }
        }
    }, [props.productId]);

    return (
        <DetailBox>
            <BtnContainer>
            {
                BoxContainer()
            }
            </BtnContainer>
            <DetailContainer>
            {
                ImageCount == 0 ?
                <GoodsDetail>
                </GoodsDetail>
                :
                <>
                {
                    ImageUrls.map((url,i) => (
                        <GoodsDetail key={i}>
                            <img 
                                src={URL.createObjectURL(url)} 
                                alt={url}
                            />
                        </GoodsDetail>
                    ))
                }
                </>
            }
            </DetailContainer>
        </DetailBox>
    )
}

export default GoodsDetail