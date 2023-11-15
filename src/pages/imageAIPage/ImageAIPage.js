import { useEffect, useState } from "react";
import { useRef } from "react";
import { UploadImageAPI } from "../../components/Backend/Axios";
import Header from "../../components/Header/header";

export default function ImageAIPage() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [postid, setPostId] = useState(0);
  const imageRef = useRef();
  const [imageFile, setImageFile] = useState();
  const [AiImage, setAiImage] = useState();
  let formData = new FormData();
  function getFile() {
    imageRef.current.click();
  }

  function inputOnChanged() {
    setImageFile(imageRef.current.files[0]);
  }

  function deleteImage() {
    setImageFile(null);
  }

  const onImageDownload= (file)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
       setAiImage(...reader.result || null);
    };
  };

  const AISendingImage = () => {
    formData.append('files',imageFile);
    console.log(formData);
    UploadImageAPI
      .post('/basiliumAi/getAiService',formData)
      .then(res =>{res.blob()})
      .then((res)=>{
          let file = new File([res], res.type);
          onImageDownload(file);
          console.log(res);
          console.log('Success');
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  useEffect(()=>{
    const urlParam = new URLSearchParams(window.location.search);
        const newPostID = urlParam.get('categoryid')
        setPostId(newPostID);
        const handleScroll = () => {
            if(window.scrollY > 1){
                setIsScrollingDown(true);
            }else{
                setIsScrollingDown(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
  },[])

  return (
    <>
      <Header
        setPostId={postid}
        isScroll={isScrollingDown} 
      />
      <div className="container">
        <div className="imageRow">
          <div className="imageBox">
            <input
              type="file"
              name="files"
              ref={imageRef}
              style={{ display: "none" }}
              onChange={inputOnChanged}
            ></input>

            {imageFile ? (
              <>
                <img src={URL.createObjectURL(imageFile)} className="image" />
                <div className="deleteButton" onClick={deleteImage}>
                  <img
                    src={require("../../imgs/imageAIPage/trashCan.png")}
                    width={30}
                    height={30}
                    alt="삭제"
                  />
                </div>
              </>
            ) : (
              <div className="uploadButton" onClick={getFile}>
                <img
                  src={require("../../imgs/imageAIPage/upload.png")}
                  width={30}
                  height={30}
                  alt="업로드"
                />
              </div>
            )}
          </div>
          <div style={{ width: "200px" }} />
          {
            AiImage ? (
              <div className="imageBox">
                <img
                  src={URL.createObjectURL(AiImage)}
                  width={30}
                  height={30}
                  alt="업로드"
                />
              </div>
            ) :
            (
              <div className="imageBox">

              </div>
            )
          }
        </div>

        <button 
          className="applyButton"
          onClick={AISendingImage}
        >
          입혀보기
        </button>
        <style jsx>{`
          .container {
            width: 100vw;
            height: 100vh;
            background-color: #212529;

            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .imageRow {
            display: flex;
            justify-content: space-around;
            align-items: center;

            margin-top: 100px;
          }

          .imageRow .imageBox {
            width: 300px;
            height: 450px;
            background-color: #d9d9d9;

            display: flex;
            justify-content: center;
            align-items: center;

            position: relative;
          }

          .imageRow .imageBox .image {
            width: 300px;
          }

          .imageRow .imageBox .deleteButton {
            width: 50px;
            height: 50px;
            background-color: #ffffff;
            border-radius: 25px;

            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            top: 16px;
            right: 16px;
          }

          .imageRow .imageBox .uploadButton {
            width: 50px;
            height: 50px;

            display: flex;
            justify-content: center;
            align-items: center;
          }

          .applyButton {
            width: 300px;
            height: 50px;

            font-size: 20px;

            margin-top: 100px;
          }
        `}</style>
      </div>
    </>
  );
}
