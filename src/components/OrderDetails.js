import React from "react";
import sampleProduct from '../imgs/product.png';
import OrderDetailsCompo from "./OrderDetailsCompo";

const OrderDetails = () =>{

    const FromServer =[
        {
            img: {sampleProduct},   
            productName:"Crown Silver Hoodie 후드티",  
            orderDates: "23.07.31",
            t_code: "04",
            t_invoice:"653521793402",
            orderQuantity: 2,
            totalPrice: 45000,
            deliveryState: "배송중"
            
        },
        {
            img: {sampleProduct}, 
            productName:"Crown Silver Hoodie 후드티",  
            orderDates: "23.06.20",
            t_code: "04",
            t_invoice:"653521793402",
            orderQuantity: 3,
            totalPrice: 120000,
            deliveryState: "배송완료"
        },
    ];

    return(
        <div className="OrderDetail__body">
            <h2>주문내역 조회</h2>

            <div className="OrderDetailsCompos">
                <OrderDetailsCompo
                   orderInfo ={FromServer[0]}
                />

                <OrderDetailsCompo
                    orderInfo ={FromServer[1]}
                />
            </div>
        </div>
    );
}

export default OrderDetails;