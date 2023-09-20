import React from 'react'
import {
  Card,
  CardBg,
  CardContent,
  CategoryTitle,
  Linkdiv,
  Spandiv,
  Subtitle,
} from '../../styles/Store/Category/CategoryObj.style'

function CategoryObj(props) {
    return (
        <Card>
            <Linkdiv to={props.ref}>
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
            </Linkdiv>
        </Card>
    )
}

export default CategoryObj