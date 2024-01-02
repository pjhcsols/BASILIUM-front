import React from 'react'
import * as S from './APILoginbox.style'

function APILoginbox() {

    return (
        <>
            <S.APILoginBtnBox>
                <S.APILoginBox>
                    <S.Kakao />
                    <span className="api-login-title">
                        카카오
                    </span>
                </S.APILoginBox>
                <S.APILoginBox>
                    <S.Naver />
                    <span className="api-login-title">
                        Naver
                    </span>
                </S.APILoginBox>
                <S.APILoginBox>
                    <S.Google />
                    <span className="api-login-title">
                        Google
                    </span>
                </S.APILoginBox>
            </S.APILoginBtnBox>
        </>
    )
}

export default APILoginbox