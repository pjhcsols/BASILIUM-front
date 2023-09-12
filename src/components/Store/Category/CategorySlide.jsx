import React from 'react'
import CategoryBox from './CategoryBox'
import {
  ExBg,
  NextButtonBox,
  PrevButtonBox,
} from '../../styles/Store/Category/CategorySlide.style'

import Huku from '../../../assets/Goods/Huku.jpeg'
import GrayHuku from '../../../assets/Goods/GrayHuku.jpeg'
import WhiteHat from '../../../assets/Goods/WhiteHat.jpeg'

import { 
  ReactComponent as PrevButton
} from '../../../assets/SVG/caret-back-outline.svg';
import { 
  ReactComponent as NextButton
} from '../../../assets/SVG/caret-forward-outline.svg';

function CategorySlide() {
  return (
    <>
        <ExBg>
            <CategoryBox />
            <PrevButtonBox>
              <PrevButton
                style={{
                  "color": "white"
                }}
              />
            </PrevButtonBox>
            <NextButtonBox>
              <NextButton 
                style={{
                  "color": "white"
                }}
              />
            </NextButtonBox>
        </ExBg>
    </>
  )
}

export default CategorySlide