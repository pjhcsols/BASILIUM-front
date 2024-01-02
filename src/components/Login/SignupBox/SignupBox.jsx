import React, { useEffect, useRef, useState } from 'react'
import BasiliumAPI from '../../../utils/Axios'
import { useNavigate } from 'react-router-dom';
import Loading from '../../../pages/Loading/Loading';
import APILoginbox from '../APILoginBox/APILoginbox';
import { useDispatch } from 'react-redux';

import * as S from '../LoginForm.style'

function SignupBox() {
    /* React hooks Variables */
    const navigate = useNavigate();
    const dispatch = useDispatch();

    /* State Variables */
    const [number, setnumber] = useState('');
    const [email, setemail] = useState('');
    const [pw, setpw] = useState('');
    const [checkpw, setcheckpw] = useState('');
    const [name, setname] = useState('');

    const numberref = useRef(null);
    const emailref = useRef(null);
    const pwref = useRef(null);
    const checkpwref = useRef(null);
    const nameref = useRef(null);

    const imageref = useRef(null);

    const [IsLoading, setIsLoading] = useState(false);

    /* 
        value : Reference on Input value 
        onCallback : set function to input on State variable
    */
    const onChangeSlot = (value, { onCallback }) => {
        const InputValue = value.current?.value;
        onCallback(InputValue);
    }

    /* To make Input content by using forEach grammer */
    function InputContent(){
        let list = [];
        const RefList = [numberref, emailref, pwref, checkpwref, nameref];
        const StateList = [setnumber, setemail, setpw, setcheckpw, setname];
        const InputContentInfo = [
            {
                'id': 0,
                'type': 'text',
                'name': 'number',
                'value': '',
                'placeholder': '전화번호를 입력해주세요',
                'title': '전화번호'
            },
            {
                'id': 1,
                'type': 'text',
                'name': 'email',
                'value': '',
                'placeholder': '이메일을 입력해주세요',
                'title': '이메일'
            },
            {
                'id': 2,
                'type': 'password',
                'name': 'password',
                'value': '',
                'placeholder': '비밀번호를 입력해주세요',
                'title': '비밀번호'
            },
            {
                'id': 3,
                'type': 'password',
                'name': 'checkpw',
                'value': '',
                'placeholder': '전화번호를 확인해주세요',
                'title': '비밀번호 확인'
            },
            {
                'id': 4,
                'type': 'text',
                'name': 'name',
                'value': '',
                'placeholder': '이름을 입력해주세요',
                'title': '이름'
            },
            {
                'id': 5,
                'type': 'file',
                'name': 'clothes',
                'value': '',
                'placeholder': null,
                'title': '착용샷',
            }
        ];

        InputContentInfo.forEach((item)=>{
            <S.InputBox>
                <span className="title">{item.title}</span>
                <S.InputBlock
                    type={item.type}
                    name={item.name}
                    value={item.value}
                    placeholder={item.placeholder}
                    ref={RefList[item.id]}
                    onChange={onChangeSlot(RefList[item.id], StateList[item.id])}
                />
            </S.InputBox>
        });

        return list;
    }

    const onClickSignup = (e) => {
        setIsLoading(true);
        const Formdata = new FormData();
        Formdata.append('number', number);
        Formdata.append('email', email);
        Formdata.append('password', pw);
        Formdata.append('Username', name);

        BasiliumAPI.post('/user', Formdata)
            .then(data =>{
                setIsLoading(true);
                navigate('/');
            })
            .catch(err => {
                console.log('Error on SignUp Box <' + err + '>');
                navigate('/login');
            });
    }

    useEffect(()=>{
        console.log("Loading...");
    }, [IsLoading]);

    return (
        <>
            {IsLoading ?
            <Loading></Loading>
                :    
            <S.Wrapper>
                <S.InputBox>
                {
                    InputContent()
                }
                </S.InputBox>
                <S.ButtonBox>
                    <S.CheckButton onClick={onClickSignup}>
                        <span className="signup-button-span">
                            회원 가입
                        </span>
                    </S.CheckButton>
                    <S.AnotherAccountBtn href='/login' />
                    <APILoginbox />
                </S.ButtonBox>
            </S.Wrapper>
            }
        </>
    )
}

export default SignupBox

