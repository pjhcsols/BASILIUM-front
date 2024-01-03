import React, { useEffect, useState } from 'react'
import { BasiliumAPI } from '../components/Backend/Axios';

function Test2() {
    const [ProductData, setProductData] = useState({
        productCategoryId: 1,
        productName: "asd",
        productPrice: 0,
        productDesc: "asd",
        main64Images: [""],
        sub64Images: [""],
    });
    const [ProductList, setProductList] = useState();
    const [decodedImage, setDecodedImage] = useState(null);

    const handleImageDecode = (base64String) => {
        const decodedImage = atob(base64String);
        // Now, decodedImage contains the decoded image data.
        // Convert decoded image to Blob
        const arrayBuffer = new Uint8Array(decodedImage.length);
        for (let i = 0; i < decodedImage.length; i++) {
            arrayBuffer[i] = decodedImage.charCodeAt(i);
        }
        const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });

        // Create URL from Blob
        const url = URL.createObjectURL(blob);
        setDecodedImage(url);
    };

    const getsomedata =() => {
        BasiliumAPI.get('/products/allproduct')
            .then(res=>{
                console.log(res.data);
                handleImageDecode(res.data[2].main64Images[1]);
            })
            .catch(err=>{
                console.log(err);
            })
    }
    useEffect(()=>{
        console.log(ProductList);
    }, [decodedImage]);
  return (
    <>
        <button onClick={getsomedata}>여기!</button>
        <img src={decodedImage} alt="" />
    </>
  )
}

export default Test2