import React from 'react'
import axios from 'axios'

//test : https://my-json-server.typicode.com/typicode/demo/posts
export const base_url = "http://172.20.30.37:8080";

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
});

export const PaginationAPI = axios.create({
    BASE_URL: base_url,
    headers: {
        "Content-Type" : "application/json; charset=UTF-8"
    },
    timeout: 5000
});


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

export const ExplainAPI = axios.create({
    BASE_URL: base_url,
    headers: {
        "Content-Type": "multipart/form-data; charset=UTF-8" 
    },
    timeout: 5000
});

export const QnaAPI = axios.create({
    BASE_URL: base_url,
    headers:{
        "Content-Type": "multipart/form-data; charset=UTF-8"
    },
    timeout: 5000
});

export const ReviewAPI = axios.create({
    BASE_URL: base_url,
    headers:{
        "Content-Type" : "multipart/form-data; charset=UTF-8"
    },
    timeout: 5000
});

export const RequestInfoAPI = axios.create({
    BASE_URL: base_url,
    headers: {
        "Content-Type" : "multipart/form-data; charset=UTF-8"
    },
    timeout: 5000
});

export default API