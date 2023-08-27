import React from 'react'
import axios from 'axios'

export const base_url = "http://192.168.0.13:8080/products/add";

const API = axios.create({
    BASE_URL: base_url,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': true,
    },
    withCredentials: false,
});

export default API;