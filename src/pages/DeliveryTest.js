import React from "react";
import { useLocation } from "react-router-dom";
import DeliveryInfo from "../components/DeliveyInfo";


const DeliveryTest = () => {
    const {state} = useLocation();

    return(
        <DeliveryInfo para= {state.values.orderInfo}/> 
    );
}

export default DeliveryTest;