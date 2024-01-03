import { useEffect, useState } from "react";
import { useRef } from "react";
import { AI_API } from "../../components/Backend/Axios";
import Header from "../../components/Header/header";

export default function ImageAIPage() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [postid, setPostId] = useState(0);
  const imageRef = useRef();
  const lookRef = useRef();
  const [imageFile, setImageFile] = useState();
  const [lookFile, setlookFile] = useState();
  const [AiImage, setAiImage] = useState();

  let formData = new FormData();
  function getFile() {
    imageRef.current.click();
  }

  function getlook() {
    lookRef.current.click();
  }

  function inputOnChanged() {
    setImageFile(imageRef.current.files[0]);
    formData.append('files',imageFile);
  }

  function inputlookOnChange(){
    setlookFile(lookRef.current.files[0]);
    formData.append('files',lookFile);
  }

  function deleteImage() {
    setImageFile(null);
  }

  function deletelook(){
    setlookFile(null);
  }

  // Using blob
  const ImageEncoding = (images) =>{    
    // According to Axios, Post some Image data.
    const reader = new FileReader()
    reader.readAsDataURL(images)
    reader.onload = () => {
        setAiImage(data => [...data, reader.result] || null)
    }
  }

  const [ProductObj, setProductObj]= useState({
    'userid': "1",
    'productId': 1,
  });
  formData.append('strInfos',JSON.stringify(ProductObj));
  const [userid, setuserid] = useState("1");
  const [productId, setProductId] = useState("1");

  const AISendingImage = (e) => {
    e.preventDefault();
    
    AI_API
      .post('/basiliumAi/getAiService', formData)
      .then((res)=>{res.blob()})
      .then(({data : {images}}) => {
        console.log(images);
        var file = new File([images], images.type);
        ImageEncoding(file);
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
        <form
          encType="multipart/form-data"
          onSubmit={AISendingImage}
        >
        <div className="imageRow">
          <div className="imageBox">
            <input
              type="file"
              name="files"
              accept="images/*"
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
          <div className="imageBox">
            <input
                type="file"
                name="files"
                ref={lookRef}
                style={{ display: "none" }}
                onChange={inputlookOnChange}
              ></input>
              {lookFile ? (
                <>
                  <img src={URL.createObjectURL(lookFile)} className="lookimage" />
                  <div className="lookdeleteButton" onClick={deletelook}>
                    <img
                      src={require("../../imgs/imageAIPage/trashCan.png")}
                      width={30}
                      height={30}
                      alt="삭제"
                    />
                  </div>
                </>
              ) : (
                <div className="lookuploadButton" onClick={getlook}>
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
            flex-direction: row;
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
          
          .imageRow .imageBox .lookimage{
            width: 300px;
          }

          .imageRow .imageBox .lookuploadButton {
            width: 50px;
            height: 50px;

            display: flex;
            justify-content: center;
            align-items: center;
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
        </form>
      </div>
    </>
  );
}
