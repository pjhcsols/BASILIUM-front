import React, { useRef } from 'react'
import * as S from './TotalScreen.style'
import { useScroll, useSpring, useTransform } from 'framer-motion';
import LookScreen from '../../components/MainPage/LookScreen/LookScreen';
import MainScreen from '../../components/MainPage/LookScreen/MainScreen';
import AIScreen from '../../components/MainPage/LookScreen/AIScreen';

function useParallelx(value, distance){
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Container(){    
    const slideref = useRef(null);
    const { scrollXProgress } = useScroll({ target: slideref });
    const x = useParallelx(scrollXProgress, 300);
    const componentbox = [ LookScreen, MainScreen, AIScreen ];
    return (
        <section>
            <div ref={slideref}>
                {
                componentbox.forEach((value, key) => (
                    {value}
                ))}
            </div>
        </section>
    )
}


function TotalScreen() {
    const { scrollXProgress } = useScroll();
    const scaleX = useSpring(scrollXProgress,{
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <S.SlideBox>
            
        </S.SlideBox>
    )
}

export default TotalScreen