import React from 'react'
import axios from 'axios'

//test : https://my-json-server.typicode.com/typicode/demo/posts
//const real = http://172.28.80.1:8080 
export const base_url = "http://172.20.19.202:8080";

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
    timeout: 5000,
})

export const DownloadFiles = axios.create({
    BASE_URL: base_url,
    headers: { 
        "Content-type": "application/json; charset=UTF-8" 
    },
    timeout: 5000,
})

export const BuyingAPI = axios.create({
    BASE_URL: base_url,
    headers: { 
        "Content-type" : "application/json; charset=UTF-8" 
    },
    timeout: 5000,
})

export default API