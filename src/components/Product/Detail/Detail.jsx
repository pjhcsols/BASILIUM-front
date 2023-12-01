import React, { useState } from 'react'
import { 
    DetailBox, DetailSource 
} from './Detail.style'
import { BasiliumAPI } from '../../../Backend/Axios';

function Detail(props) {
    const [DetailImageList, setDetailImageList] = useState(['']);
    const GetDetailImage = () => {
        BasiliumAPI
            .get(`/${props.productId}`)
            .then(data=>{
                /* if data is one */
                const definedImage = URL.createObjectURL(data);
                setDetailImageList(val=>[...val, definedImage]);

                /* if data is multiple. */
                data.forEach((value, i)=>{
                    const definedImage = URL.createObjectURL(value);
                    setDetailImageList(val=>[...val, definedImage]);                
                });
            })
            .catch(err=>{
                console.log(err);
            });

        let list = [];
        DetailImageList.forEach((value, i)=>{
            list.push(
                <DetailSource
                    key={i}
                    src={value}
                />
            )
        });

        return list;
    }

    return (
        <DetailBox>
        {
            GetDetailImage()
        }
        </DetailBox>
    )
}

export default Detail