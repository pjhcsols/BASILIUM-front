import React, { useEffect, useState } from 'react'
import { 
    Basilium,
    BasiliumImg, 
    NotFoundBG, 
    NotFoundImagediv 
} from '../styles/NotFound/NotFound.style'
import { BasiliumAPI } from '../Backend/Axios'

function NotFound() {

    // Related to Image
    const reader = new FileReader()
    const formData = new FormData()

    // Getting Image
    const [ImageUrl, setImageUrl] = useState(null);
    const [Image, setImage] = useState('');
    
    // Downloading Image File
    const DownloadBasilium = () => {
        BasiliumAPI
            .get('/basilium')
            .then(image => {
                console.log(image)
                const NewFile = new File([image])
                reader.onload = (event) => {
                    setImage(String(reader.result))
                }
                reader.readAsDataURL(NewFile)
            })
            .catch(error => {
                console.log(error)
                alert("이미지가 안불러와지네요.")
            })
    }

    useEffect(
        DownloadBasilium()
    , [])

    return (
        <NotFoundBG>
            <NotFoundImagediv>
                <Basilium>
                    <BasiliumImg />
                </Basilium>
                <h3>
                    404<br/>
                    NOT<br/>
                    FOUND
                </h3>
            </NotFoundImagediv>
        </NotFoundBG>
    )
}

export default NotFound