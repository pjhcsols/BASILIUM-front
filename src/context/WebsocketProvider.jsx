import React, { createContext, useEffect, useRef, useState } from 'react'
import { Ai_url } from '../utils/Axios';

const WebsocketContext = createContext({
  userdata: {},
  isLogin: false,
})

const WebsocketProvider = ({children}) => {
  const [userdata, setuserdata] = useState({
    'ID': '',
    'Email': '',
    'Liked': [],
    'ShopCart': [],
  });
  const [IsLogin, setIsLogin] = useState(false);
  useEffect(()=>{
    let ws = useRef(null);

    if(!ws.current){
      ws = new WebSocket(`ws//${Ai_url}`);
      ws.current.onopen = () => {
        console.log("Connected to Websocket");
        setIsLogin(!IsLogin);
      }
      ws.current.onclose = () => {
        console.log("Socket is disconnected");
        setIsLogin(!IsLogin);
      }
      ws.current.onerror = () => {
        console.log("Socket is occured error");
      }
    }

    return () => {
      ws.current?.close();
    }
  }, []);

  return (
    <WebsocketProvider>
      {children}
    </WebsocketProvider>
  )
}

export default WebsocketProvider