import React from 'react'
import {
  Card,
  CardBg,
  CardContent,
  CategoryTitle,
  Spandiv,
  Subtitle,
} from '../../styles/Store/Category/CategoryObj.style'
import { Link } from 'react-router-dom'

function CategoryObj(props) {
    console.log(props)
    return (
        <Card>
            <Link to={`/shopping?categoryid=${props.id}`}>
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
            </Link>
        </Card>
    )
}

export default CategoryObj