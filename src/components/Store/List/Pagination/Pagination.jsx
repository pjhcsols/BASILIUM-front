import React, { useState } from 'react'
import { 
    BasiliumAPI
} from '../../../Backend/Axios'
import { 
    LArrow, 
    LeftBtn, 
    MidBox, 
    MidText, 
    PaginationBG, 
    RArrow, 
    RightBtn
} from '../../../styles/ShoppingList/Pagination/Pagination.style'

function Pagination() {
    const [TotalPage, setTotalPage] = useState(0)
    const [CurrPage, setCurrPage] = useState(0)

    const LeftonClick = () => {
        if(CurrPage <= 0){
            return 0;
        }else{
            setCurrPage(CurrPage-1)
        }
    }
    
    const RightonClick = () => {
        if(CurrPage >= TotalPage){
            return 0;
        }else{
            setCurrPage(CurrPage+1)
        }
    }

    const GetTotalPage = () => {
        BasiliumAPI
            .get()
            .then(data => {
                console.log(data);
                setTotalPage(data);
            })
            .error(err => {
                console.log(err);
            })
    }

    const ShowPage = (currpage, totalpage) => {
        let list = [];
        if(totalpage === 0){
            list.push(
                <MidText>
                    Undefined
                </MidText>
            )
        }else{
            list.push(
                <MidText>
                    {currpage}/{totalpage}
                </MidText>
            )
        }
        return list;
    }

    return (
        <PaginationBG>
            <LArrow onClick={RightonClick}>
                <RightBtn />
            </LArrow>
            <MidBox>
            {
                ShowPage(CurrPage, TotalPage)
            }
            </MidBox>
            <RArrow onClick={LeftonClick}>
                <LeftBtn />
            </RArrow>
        </PaginationBG>
    )
}

export default Pagination