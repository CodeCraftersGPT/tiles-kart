import React, { useState } from 'react';

export function Order(){
    // define jsx with order id ,product name, quantity, price, total
    // if we need maintain the state of the component use the useState Hook

    const orderdetails = {
        id: 1,
        productName: 'Tiles',
        quantity: 100,
        price: 10,
        total: 1000
    };
    const [order,setOrder] = useState(orderdetails);
   

    return (
        <div>
            <h1>Order Id: {order.id} </h1>
            <h1>Product Name: {order.productName}</h1>
            <h1>Quantity: {order.quantity}</h1>
            <h1>Price:  {order.price}</h1>
            <h1>Total:  {order.total}</h1>
        </div>
    );

}