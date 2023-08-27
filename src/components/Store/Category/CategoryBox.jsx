import React from 'react'
import { 
    Scrollerdiv,
} from '../../styles/Store/Category/CategoryBox.style'

import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { 
    responsive,
    CategoryList
} from './Category';
import CategoryObj from './CategoryObj';

function CategoryBox() {
    const product = CategoryList.map((item) => (
        <CategoryObj
            src={item.src}
            title={item.title}
            subtitle={item.subtitle}
        />
    ));
    return (
        <Scrollerdiv>
            <Carousel 
                responsive={responsive}
                showDots={true}
                draggable={false}
            >
                {product}
            </Carousel>
        </Scrollerdiv>
    )
}

export default CategoryBox