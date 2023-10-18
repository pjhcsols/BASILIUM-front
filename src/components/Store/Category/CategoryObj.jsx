import React from 'react'
import {
  Card,
  CardBg,
  CardContent,
  CategoryTitle,
  Spandiv,
  Subtitle,
} from '../../styles/Store/Category/CategoryObj.style'

function CategoryObj(props) {
    return (
        <Card>
            <CardContent>
                <CardBg
                    src={props.src}
                />
                <Spandiv>
                    <CategoryTitle>
                        {props.title}
                    </CategoryTitle>
                    <Subtitle>
                        {props.subtitle}
                    </Subtitle>
                </Spandiv>
            </CardContent>
        </Card>
    )
}

export default CategoryObj