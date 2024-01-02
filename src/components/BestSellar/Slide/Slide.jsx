import React, { useEffect, useRef } from 'react'
import * as S from './Slide.style'
import BestSellarObj from '../BestSellarObj/BestSellarObj';

function Slide({props}) {
    const SlideRef = useRef(null);
    const slidecount = props.slidecount;
    const BestSellarContent = () => {
        let list = [];
        for(let i=0;i<slidecount;i++){
            list.push(
                <BestSellarObj obj={props} />
            )
        }

        return list;
    };
    useEffect(()=>{
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = SlideRef.current;
            const pageHeight = window.innerHeight;
            const currpage = 0;
            // scroll down
            if(deltaY > 0){
                if(scrollTop >= 0 && scrollTop < pageHeight){
                    SlideRef.current.scrollTo({
                        top: pageHeight,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if(scrollTop >= pageHeight && scrollTop < pageHeight * (slidecount)){
                    SlideRef.current.scrollTo({
                        top: pageHeight * ( currpage + 1 ),
                        left: 0,
                        behavior: "smooth",
                    });
                }
            }//scroll up
            else{
                if(scrollTop >= 0 && scrollTop < pageHeight){
                    SlideRef.current.scrollTo({
                        top: pageHeight,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if(scrollTop >= pageHeight && scrollTop < pageHeight * (slidecount)){
                    SlideRef.current.scrollTo({
                        top: pageHeight * ( currpage + 1 ),
                        left: 0,
                        behavior: "smooth",
                    });
                }
            }
        }
        if(SlideRef.current){
            const ref = SlideRef.current;
            ref.addEventListener("wheel", wheelHandler);
            return () => {
                ref.removeEventListener("wheel", wheelHandler);
            }
        }else{
            console.log("reference error..");
        }
    }, []);

    return (
        <S.SlideBox>
            <S.SlideBox className="slide-bg" ref={SlideRef}>
            {
                BestSellarContent()
            }
            </S.SlideBox>
        </S.SlideBox>
    )
}

export default Slide