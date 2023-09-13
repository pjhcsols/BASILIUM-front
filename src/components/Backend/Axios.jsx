import React from 'react'
import axios from 'axios'

//test : https://my-json-server.typicode.com/typicode/demo/posts
//const real = http://172.28.80.1:8080 
export const base_url = "http://172.30.1.100:8080";

const API = axios.create({
    BASE_URL: base_url,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8', 
        'Access-Control-Allow-Methods': true,
    },
    withCredentials: false,
});

export const FileAPI = axios.create({
    BASE_URL: base_url,
    headers: { 
        'Content-Type': "application/json; charset=UTF-8" 
    },
    timeout: 5000,
});

export const UploadImageAPI = axios.create({
    BASE_URL: base_url,
    headers: { 
        'Content-Type': 'multipart/form-data; charset=UTF-8' 
    },
    timeout: 50000,
});

export const DownloadFiles = axios.create({
    BASE_URL: base_url,
    headers: { 
        "Content-Type": "multipart/form-data; charset=UTF-8" 
    },
    timeout: 50000,
});

export const BuyingAPI = axios.create({
    BASE_URL: base_url,
    headers: { 
        "Content-Type" : "application/json; charset=UTF-8"
    },
    timeout: 5000,
});

export const CountingAPI = axios.create({
    BASE_URL: base_url,
    headers: {
        "Content-Type" : "application/json; charset=UTF-8"
    },
    timeout: 5000,
});

export const BasiliumAPI = axios.create({
    BASE_URL: base_url,
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    },
    timeout: 5000
});

export const BestSellarAPI = axios.create({
    BASE_URL: base_url,
    headers: {
        "Content-Type" : "application/json; charset=UTF-8"
    },
    timeout: 5000
});

export const ListAPI = axios.create({
    BASE_URL: base_url,
    headers: {
        "Content-Type" : "application/json; charset=UTF-8"
    },
    timeout: 5000
})

export const UploadShoppingCartAPI = axios.create({
    BASE_URL: base_url,
    headers: {
        "Content-Type" : "application/json; charset=UTF-8"
    },
    timeout: 5000
});

export const UploadBuyingAPI = axios.create({
    BASE_URL: base_url,
    headers: {
        "Content-Type" : "application/json; charset=UTF-8"
    },
    timeout: 5000
});

export const ReviewAPI = axios.create({
    BASE_URL: base_url,
    headers: {
        "Content-Type": "multipart/form-data; charset=UTF-8" 
    },
    timeout: 5000
});

export const DetailGoodsAPI = axios.create({
    BASE_URL: base_url,
    headers: {
        "Content-Type": "multipart/form-data; charset=UTF-8" 
    },
    timeout: 5000
});

export const QandAAPI = axios.create({
    BASE_URL: base_url,
    headers: {
        "Content-Type": "application/json; charset=UTF-8; multipart/form-data;" 
    },
    timeout: 5000
})

export default API