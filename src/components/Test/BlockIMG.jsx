import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import API, { UploadImageAPI, DownloadFiles } from '../Backend/Axios'

const BG = styled.div`
    width: 100%;
    height: 1080px;
`

const List = styled.div`
    width: 100%;
    height: 500px;
`

function BlockIMG() {
    const [obj, setObj] = useState({
        'productId': null,
        "productCategoryId": 1,
        'productName': "클래식 B 주르핏 티셔츠",
        'productPrice': 45000,
        'productDesc': "상의", // Description 
        'photo': '', 
    })

    // ImagesList 
    const [ImagesList, setImagesList] = useState([])
    const [ShowImageList, SetShowImageList] = useState([])

    // According to Axios, Post some Image data.
    const formData = new FormData()

    const reader = new FileReader()

    const ImageEncoding = (images) =>{
        for(let i = 0;i<ImagesList.length;i++){
            reader.readAsDataUrl(ImagesList[i])
            new Promise((resolve)=>{
                reader.onload = () => {
                    SetShowImageList(reader.result)
                    resolve()
                }
            })   
        }
    }

    /*const UploadObj = () => {
        API
            .post('product/upload', )
            .then(response => {
                alert("객체 보냄")
                console.log(response)
            })
            .catch(error => {
                alert("객체 보내기 안됨")
                console.log(error)
            })
    }*/

    const Test = () => {
        const Obj = {
            "productId": null,
            "productCategoryId": 1,
            "productName": "클래식 B 주르핏 티셔츠",
            "productPrice": 45000,
            "productDesc": "상의", // Description
        }
        const ObjJson = JSON.stringify(Obj)
        UploadImageAPI
            .get('/products')
            .then(response => {
                console.log(" 이거 됐네요 ! ")
                console.log(response)
            })
            .catch(error => {
                console.log("이거..에러가 심상치않은데요?")
                console.log(error)
            })
    }

    const onFileChanges = (e) => {
        e.preventDefault()
        if(e.target.files){
            const HardObj = {
                "productId": null,
                "productCategoryId": 1,
                "productName": "클래식 B 주르핏 티셔츠",
                "productPrice": 45000,
                "productDesc": "상의", // Description
            }
            const HardObjJson = JSON.stringify(HardObj)
            formData.append('product',HardObjJson)
            // formData use the key and data to include 
            // for 문 확인하면서 데이터 넣기
            //setImagesList(e.target.files)
            const UploadedFile = e.target.files
            const UploadedFileArr = Array.from(UploadedFile)
            UploadedFileArr.forEach(element => {
                console.log(element)
                formData.append('files',element)
            });
            formData.forEach((element)=>{
                console.log(element)
            })
            console.log("====useState====")
            console.log(UploadedFile)
            console.log("====form Data====")
            for (let key of formData.keys()) {
                console.log(key, ":", formData.get(key))
            }
            // 여기에서 문제가 있었음.
            // IMAGE 파일을 보낼 때, 404 가 계속 뜨고, 그 404를 해결하려고 Image 를 계속 보내려고 하다보니...
            // ================================================================================
            // 문제 해결 : formData 의 key : value 중 key 값을 backend 와 맞추지 않아서 생긴 Error
            // ================================================================================
            UploadImageAPI
            .post('/products/upload',formData)
            .then(({ data: { images } }) => 
                alert("IMAGE SENT!")
            )
            .catch(error => {
                for (let key of formData.keys()) {
                    console.log(key, ":", formData.get(key))
                }
                alert("Image Failed!")
            })
        }
    };
    const UploadBtn = (e) => {
        e.preventDefault()
        DownloadFiles
            .get('/getProductPhotos', {
                productid : 1
            })
            .then(data => {
                console.log(data)
                const DataArr = Array.from(data)
                DataArr.forEach(element => {
                    console.log(element)
                    setImagesList([...element])
                })
            })
            .catch(error => {
                console.log("useEffect DownloadFiles Error")
                console.log(error)
            }
        )
        ImageEncoding()
    }
    const onImageListClick = (imageid) => {
        DownloadFiles
            .post("/products/add", {imageid})
            .then(({data}) => {
                console.log(data)
                const newFile = new File([data], imageid)
                const reader = new FileReader()
                reader.onload = (event) => {
                    const previewImage = String(event.target?.result)            
                }
                reader.readAsDataUrl(newFile)
        })
    }

    return (
        <BG>
            <form
                encType="multipart/form-data"
                onSubmit={UploadBtn}
            >
                <input 
                    name="strProduct"
                    type="file"
                    accpet="image/*" 
                    multiple
                    onChange={(event) => onFileChanges(event)}
                />
                <button
                    onClick={(event) => UploadBtn(event)}
                >
                    가져오기
                </button>
            </form>
            {ShowImageList && ShowImageList.map((image, id) => (
                <div>
                    <img src={image} alt={`${image}-${id}`} />
                </div>
            ))

            }
        </BG>
    )
}

export default BlockIMG