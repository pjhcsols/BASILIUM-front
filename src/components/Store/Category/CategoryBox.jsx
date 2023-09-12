import React, { useRef } from 'react'
import { 
    Carouseldiv,
    Scrollerdiv,
} from '../../styles/Store/Category/CategoryBox.style'
import "react-multi-carousel/lib/styles.css";

import { 
    responsive,
    CategoryList
} from './Category';
import CategoryObj from './CategoryObj';

function CategoryBox() {
    const ProductIDRef = useRef(null)
    const product = CategoryList.map((item) => (
        <CategoryObj
            src={item.src}
            title={item.title}
            subtitle={item.subtitle}
            ref={ProductIDRef}
        />
    ));

    return (
        <Scrollerdiv>
            <Carouseldiv
                responsive={responsive}
                showDots={true}
                draggable={false}
                infinite={true}
                stopOnHover={true}
                itemCount={5}
            >
                {product}
            </Carouseldiv>
        </Scrollerdiv>
    )
}

export default CategoryBox