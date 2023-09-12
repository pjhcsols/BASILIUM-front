import backpack from '../../../assets/Section_2/backpack.png'
import hat from '../../../assets/Section_2/hat.png'
import jacket from '../../../assets/Section_2/jacket.png'
import pants from '../../../assets/Section_2/jeans.png'
import underwear from '../../../assets/Section_2/underwear.png'
import skirt from '../../../assets/Section_2/skirt.png'
import shoes from '../../../assets/Section_2/shoes.png'

export const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 
    }
};

export const CategoryList = [
    {
        id: 1,
        src: { jacket },
        title: "Jacket",
        subtitle: "상의 전용"
    },
    {
        id: 2,
        src: { pants },
        title: "Pants",
        subtitle: "하의 전용"
    },
    {
        id: 3,
        src: { hat },
        title: "Hat",
        subtitle: "모자",
    },
    {
        id: 4,
        src: { shoes },
        title: "Shoes",
        subtitle: "신발"
    },
    {
        id: 5,
        src: { backpack },
        title: "Bag",
        subtitle: "가방"
    },
    {
        id: 6,
        src: { skirt },
        title: "skirt",
        subtitle: "스커트"
    },
    {
        id: 7,
        src: { underwear },
        title: "UnderWear",
        subtitle: "속옷"
    }
];