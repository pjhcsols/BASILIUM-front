import axios from 'axios'


export const base_url = "http://172.20.38.115:8080";
export const Ai_url = "http://211.229.27.126:8080"


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
        "Content-Type": "application/json; charset=UTF-8;"
    },
    timeout: 50000
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

export const AI_API = axios.create({
    BASE_URL: `${Ai_url}/modeling`,
    headers: {
        "Content-Type" : "multipart/form-data; charset=UTF-8"
    },
    responseType:"arraybuffer",
    timeout: 500000,
})

export default API