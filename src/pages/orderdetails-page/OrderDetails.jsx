import { useNavigate } from "react-router-dom";
import "./orderdetails.scss";
import { useState } from "react";

function OrderDetails() {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    
    let price = quantity * 5000
    let discount = price * 0.01
    let delivery = 1000
    let total = price + delivery - discount

    const addQuantity = () => setQuantity(prev => prev + 1);
    const minusQuantity = () => setQuantity(prev => Math.max(prev - 1, 1)); // Ensure quantity doesn't go below 1

    return (
        <div className="order-details">
            <img className="back-icon" src="/back-icon.png" alt="" onClick={() => navigate(-1)} />
            <h2>Order details</h2>

            <div className="card">
                <img src="/order-pizza.png" alt="" />
                <div className="info">
                    <div className="item">
                        <p>Chicken Burger </p>
                        <span>Promo Pack</span>
                        <p className="price">N 5,000</p>
                    </div>
                    <div className="quantity">
                        <p onClick={minusQuantity} className="minus">-</p>
                        <span>{quantity}</span>
                        <p onClick={addQuantity} className="add">+</p>
                    </div>
                </div>
            </div>

            <div className="order-card">
                <div className="line">
                    <span>Sub-Total</span>
                    <span>N {price.toLocaleString()}</span>
                </div>
                <div className="line">
                    <span>Delivery Charge</span>
                    <span>N {delivery.toLocaleString()}</span>
                </div>
                <div className="line">
                    <span>Discount</span>
                    <span>N {discount.toLocaleString()}</span>
                </div>
                <div className="line">
                    <span className="total">Total</span>
                    <span className="total">N {total.toLocaleString()}</span>
                </div>
                <div className="place-order">
                    <span>Place My order</span>
                </div>
            </div>
        </div>
    );
}

export default OrderDetails;
