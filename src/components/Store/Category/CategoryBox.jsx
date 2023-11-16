import React from 'react'
import { 
    CarouselBox,
    Carouseldiv,
    Scrollerdiv,
} from '../../styles/Store/Category/CategoryBox.style'
import "react-multi-carousel/lib/styles.css";

import { 
    responsive,
    CategoryList
} from './Category';
import CategoryObj from './CategoryObj';
import { Link } from 'react-router-dom';

function CategoryBox() {
    const product = CategoryList.map((item, i) => {
        return (
        <CarouselBox>
            <Link
                to={`/shopping?categoryid=${i}`}
            >
                <CategoryObj
                    src={item.src}
                    key={i}
                    title={item.title}
                    subtitle={item.subtitle}
                />
            </Link>
        </CarouselBox>
    )});

    return (
        <Scrollerdiv>
            <Carouseldiv
                responsive={responsive}
                dots={true}
                draggable={false}
                stopOnHover={true}
                itemCount={5}
            >
                {product}
            </Carouseldiv>
        </Scrollerdiv>
    )
}

export default CategoryBox