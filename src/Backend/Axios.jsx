import axios from 'axios'

//test : https://my-json-server.typicode.com/typicode/demo/posts
export const base_url = "http://172.20.38.178:8080";
export const Ai_url = "http://211.229.27.126:8080"

/* using this API to get some data from Basilium Server */
export const BasiliumAPI = axios.create({
    BASE_URL: base_url,
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    },
    timeout: 5000
});

/* using this API to get some Image data from Basilium Server */
export const Image_API = axios.create({
    BASE_URL: base_url,
    headers: {
        "Content-Type" : "multipart/form-data; charset=UTF-8"
    },
    responseType:"arraybuffer",
    timeout: 5000,
})

/* using this API to get Image data from AI Server */
export const AI_API = axios.create({
    BASE_URL: `${Ai_url}/modeling`,
    headers: {
        "Content-Type" : "multipart/form-data; charset=UTF-8"
    },
    responseType:"arraybuffer",
    timeout: 500000,
})

export default API