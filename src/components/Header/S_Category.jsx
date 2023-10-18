import React from 'react'
import { 
    BrandSpan, 
    CtBox, 
    CtContainer,
    CtList,
    CtSpan
} from '../styles/Header/smallCategory.styled'
import { Link, useNavigate } from 'react-router-dom'
import { CategoryList } from '../Store/Category/Category';

const CtListObj = CategoryList.map((item, i) => {
    return (
    <div>
        <Link 
            to={`/shopping?categoryid=${i}`}
            style={{
                "text-decoration" : "none",
                "color": "white"
            }}
        >
            <CtSpan>
                {item.title}
            </CtSpan>
        </Link>
    </div>
)});

function S_Category() {
    const navi = useNavigate()
    return (
        <CtContainer>
            <CtBox>
                <CtList>
                    { CtListObj }
                    <BrandSpan>
                        Chanel
                    </BrandSpan>
                    <BrandSpan>
                        Genzo
                    </BrandSpan>
                </CtList>
            </CtBox>
        </CtContainer>
    )
}

export default S_Category