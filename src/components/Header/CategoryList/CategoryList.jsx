import React from 'react'
import { 
    BlurBg,
    CategoryBG, CategoryText, CategoryTextBox 
} from './CategoryList.style'

function CategoryList() {
    const TextList = () => {
        let list = [];
        const textlineup = [
            '구찌 앙코라', 
            'NEW!', 
            '핸드백', 
            '트래블',
            '여성',
            '남성',
            '주얼리&시계',
            '뷰티',
            '데코 & 라이프 스타일',
            '선물제안'
        ]
        /* href 달기 */
        textlineup.forEach((value, i)=>{
          <CategoryTextBox>
            <CategoryText 
                key={i}
            >
                {value}
            </CategoryText>
          </CategoryTextBox>
        })

        return list;
    }
    return (
        <CategoryBG>
            <BlurBg>
            {
                TextList()
            }
            </BlurBg>
        </CategoryBG>
    )
}

export default CategoryList