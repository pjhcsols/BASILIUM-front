import React, { useEffect, useRef } from 'react'

/* MainPage Style */
import * as S from './Mainpage.style'

function Mainpage() {
    const SlideRef = useRef(null);
    const slidecount = 2;
    
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
        <S.MainContainer>
            <S.SlideContainer>

            </S.SlideContainer>
        </S.MainContainer>
    )
}

export default Mainpage