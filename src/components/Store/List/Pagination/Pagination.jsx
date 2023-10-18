import React, { useState } from 'react'
import { PaginationAPI } from '../../../Backend/Axios'
import { 
    LArrow, 
    MidBox, 
    MidText, 
    PaginationBG, 
    RArrow 
} from '../../../styles/ShoppingList/Pagination/Pagination.style'
import { ReactComponent as LeftArrow } from '../../../../assets/SVG/Go.svg'
import { ReactComponent as RightArrow } from '../../../../assets/SVG/Back.svg'

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
        PaginationAPI
            .get()
            .then(data => {
                console.log(data)
                setTotalPage(data)
            })
            .error(err => {
                console.log(err)
            })
    }

    const ShowPage = (currpage, totalpage) => {
        let list = [];
        if(totalpage === 0){
            list.push(
                <MidText>
                    페이지 0/0
                </MidText>
            )
        }else{
            list.push(
                <MidText>
                    페이지 {currpage}/{totalpage}
                </MidText>
            )
        }
        return list;
    }

    return (
        <PaginationBG>
            <RArrow onClick={LeftonClick}>
                <LeftArrow />
            </RArrow>
            <LArrow onClick={RightonClick}>
                <RightArrow />
            </LArrow>
            <MidBox>
            {
                ShowPage(CurrPage, TotalPage)
            }
            </MidBox>
        </PaginationBG>
    )
}

export default Pagination