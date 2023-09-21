import React from 'react'
import API, { base_url } from './Axios'

export const GetGoods = async () => {
    try{
        const { data } = await API.get('/');
        return data;
    }catch(error){
        console.log(error);
    }
}

export const QeuryGoods = async() => {
    try{
        const { data } = await API.get('/');
    }catch(error){
        console.log(error);
    }
}

export async function GetData() {
    try{
        const response = await API.get('/');
    }catch(error){
        console.log(error);
    }
}

export async function Gett(){
    try{
        const response = await API.post(base_url, {
            'id': 5,
            'category': 'upper',
            'name': '클래식 B 주르핏 티셔츠'
        });
        console.log(response);
    }catch(error){
        console.error(error);
    }
}