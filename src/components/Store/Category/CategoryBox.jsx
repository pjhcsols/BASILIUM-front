import React from 'react'
import { 
    CategoryContainer,
    Category,
    CategoryName,
} from '../../styles/Store/Category/CategoryBox.style'

function CategoryBox(props) {
  return (
    <CategoryContainer>
        <Category src={props.src}>
            <CategoryName>
                {props.category}
            </CategoryName>
            <CategoryName 
                style={{
                    "top": "50%"
                }}
            >
                {props.content}
            </CategoryName>
        </Category>
    </CategoryContainer>
  )
}

export default CategoryBox