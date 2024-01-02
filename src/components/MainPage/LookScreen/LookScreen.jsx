import React from 'react'
import * as S from './LookScreen.style'
import img1 from '../../../assets/Section_1/img-1.jpg'
import img2 from '../../../assets/Section_1/img-2.jpg'
import img3 from '../../../assets/Section_1/img-3.jpg'

function LookScreen() {
  const ImageBox = () => {
    let list = [];
    let imglist = [img1, img2, img3];
    for(let i=0;i<3;i++){
      list.push(
        <S.LookBox 
          src={imglist[i]}
          alt={imglist[i]+"/"+i}
        />
      )
    }
    return list;
  }
  return (
    <S.LookContainer>
      <div className="look-title">casual & street brand</div>
      <div className="look-desc">The brand BASILIUM, which means "decorations of kings and queens," was  expressed</div>
      <div className="look-desc"> under the motto of silver ornaments worn by ancien t kings. I promise to grow further as a</div>
      <div className="look-desc">brand that pursues standard and simple details without losing a fresh feeling with a new</div>
      <div className="look-desc">design that combines basic silhouette with trendy and modern sensibility.</div>
      <div className="look-box-dummy">
      {
        ImageBox()
      }
      </div>
      <S.LookMoreBtn />
      <S.LoadMoreArrow />
    </S.LookContainer>
  )
}

export default LookScreen