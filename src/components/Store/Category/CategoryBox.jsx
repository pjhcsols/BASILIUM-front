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
        console.log(e)
        const CategoryID = e.id
//        navi(`/shopping/${CategoryID}`)
    }

    const product = CategoryList.map((item) => (
        <CategoryObj
            src={item.src}
            title={item.title}
            subtitle={item.subtitle}
            onClick={onClickCategory(item)}
        />
    ));

    return (
        <Scrollerdiv>
            <Carouseldiv
                responsive={responsive}
                draggable={false}
                stopOnHover={true}
            >
                {product}
            </Carouseldiv>
        </Scrollerdiv>
    )
}

export default CategoryBox