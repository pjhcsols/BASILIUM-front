import React from 'react'
import { 
    DetailBox, DetailBtn, DetailBtnBox, DetailImg, DetailImgBox 
} from './Detail.style'
import { BasiliumAPI } from '../../../Backend/Axios';

function Detail() {
    const [Product, setProduct] = useState({
        'productId': 0,
        'productCategoryId' : 0,
        'productName': '',
        'productPrice': 0,
        'productDesc': '',
        'imagePath': '',
    });
    const [DetailImgPaths, setDetailImgPaths] = useState([''])

    const BtnRow = () => {
        let list = [];
        let BtnName = ['세부사항', 'Review', 'QnA', '문의사항'];
        
        BtnName.forEach((value, i)=>{
            list.push(
                <DetailBtn
                    key={i}
                >
                    {value}
                </DetailBtn>
            )
        });

        return list;
    }

    const CreatingDetail = () => {
        let list = [];

        BasiliumAPI
            .get(`/${Product.productId}`)
            .then(data=>{
                setDetailImgPaths(value=>[...value, data]);
            })
            .catch(err=>{
                console.log(err);
            })

        DetailImgPaths.forEach((value, i)=>{
            list.push(
                <DetailImg 
                    src={value}
                    key={i}
                />
            )
        })

        return list;
    }

    return (
        <DetailBox>
            <DetailBtnBox>
            {
                BtnRow()
            }
            </DetailBtnBox>
            <DetailImgBox>
            {
                CreatingDetail()
            }
            </DetailImgBox>
        </DetailBox>
    )
}

export default Detail