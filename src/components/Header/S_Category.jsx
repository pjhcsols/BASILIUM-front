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


function S_Category(props) {
    const CtListObj = CategoryList.map((item, i) => {
        return (
        props.setPostId === undefined ? 
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
        :
        <div onClick={()=>{props.setPostId(i)}}>
            <CtSpan>
                {item.title}
            </CtSpan>
        </div>
    )});
}

export default S_Category