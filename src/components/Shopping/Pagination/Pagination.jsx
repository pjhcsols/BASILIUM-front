import React, { useEffect, useState } from 'react'
import { 
    NextBtn,
    PaginationBox, 
    PaginationText,
    PrevBtn
} from './Pagination.style';

function Pagination(props) {
    const [CurrPage, setCurrPage] = useState(1);
    const [TotalPage, setTotalPage] = useState(0);

    useEffect(()=>{
        setTotalPage(props.count);
    }, [props.count]);

    const onClickPrev = (e) => {
        e.preventDefault();
        if(CurrPage < 1){
            alert("현재 페이지가 첫 번째 페이지입니다.");
        }else{
            setCurrPage(CurrPage-1);
        }
    }
    const onClickNext = (e) => {
        e.preventDefault();
        if(CurrPage > TotalPage-1){
            alert("현재 페이지가 마지막 페이지입니다.")
        }else{
            setCurrPage(CurrPage+1);
        }
    }

    return (
        <PaginationBox>
            <PrevBtn 
                onClick={onClickPrev}
            />
            { TotalPage===0 ?
                <PaginationText>
                    {CurrPage / TotalPage}
                </PaginationText>
                :
                <PaginationText>
                    Error :\
                </PaginationText>
            }
            <NextBtn 
                onClick={onClickNext}
            />
        </PaginationBox>
    )
}

export default Pagination