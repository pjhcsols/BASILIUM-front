import React, { useRef } from 'react'
import { 
    Carouseldiv,
    Scrollerdiv,
} from '../../styles/Store/Category/CategoryBox.style'
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';

import { 
    responsive,
    CategoryList
} from './Category';
import CategoryObj from './CategoryObj';

function CategoryBox() {
    const navi = useNavigate()
    const onClickCategory = (e) => {
        const CategoryID = e.target.key
        navi(`/shopping/${CategoryID}`)
    }

    const product = CategoryList.map((item, i) => (
        <CategoryObj
            src={item.src}
            key={i}
            title={item.title}
            subtitle={item.subtitle}
            onClick={onClickCategory}
        />
    ));

    return (
        <Scrollerdiv>
            <Carouseldiv
                responsive={responsive}
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