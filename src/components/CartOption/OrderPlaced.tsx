import React from "react";
import Related_products from "../BestSeller/Related_products";

const OrderPlaced = () => {
  return (
    <div>
        <div>
            <div>
            <img src="/assets/done 2.svg" alt="tick" />
            </div>
        
            <div className="justify-center text-center mt-50">
                <h1>Order Placed!</h1>
                <p>
                Thank’s for your order at Kreomart e-commerce. Your order will be processed as soon as possible.
    Your order number is ORDR31796HGU.
    You will be receiving an email shortly with invoice from your order.
                </p>
            </div>
            <div>
                <button>Back to Shopping</button>
                <button>Track your order</button>
            </div>
        </div>
        <Related_products/>
    </div>
  );
};

export default OrderPlaced;
