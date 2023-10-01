import { useNavigate } from "react-router-dom";
import "../../styles/my_page/my_page.css";
import AppBar from "./appbar";
import Basket from "./basket";
import Likes from "./likes";
import ShopList from "./shopList";
import { useEffect } from "react";
import axios from "axios";
import { baseURL } from "./constatns";
import React from "react";
export default function MyPage() {

  const navigate = useNavigate();
  const [userData, setUserData] = React.useState({});
  const callPrivate = async (token) =>{
    await axios.get(baseURL+ "/v1/normalUser/userInfo", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then(response =>{
        setUserData(response.data);
      }  
    )
    .catch(err =>{
      console.log(err);
      console.log(token);
      //localStorage.removeItem("key");
      navigate("/login");
    });
  }

  useEffect(()=>{
    const token = localStorage.getItem("key");
    console.log(token);
    if(token!= null)
    {
      callPrivate(token);
    }
    else{
      navigate("/login");
    }
  }, []);

  return (
    <div className="container">
      <AppBar {...userData} />
      <ShopList />
      <Basket />
      <Likes />
    </div>
  );
}
