import React from "react";
import { useNavigate } from "react-router-dom";

const OrderDetailsCompo = (props) =>{
    
    const navigate = useNavigate();
    const  deliveryDetails= () => {
      navigate("/deliveryTest", {state: {values: props}});
    };

    return(
       
        <div>
            <p>{props.orderInfo.orderDates}</p>
            <p>{props.orderInfo.t_code}</p>
            <p>{props.orderInfo.t_invoice}</p>
            <p>{props.orderInfo.orderQuantity}</p>
            <p>{props.orderInfo.totalPrice}</p>
            <p>{props.orderInfo.deliveryState}</p>

            <button onClick ={deliveryDetails} >배송상세조회</button>
        </div>

    );
}

export default OrderDetailsCompo;