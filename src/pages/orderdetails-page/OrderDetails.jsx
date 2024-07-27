import { useNavigate } from "react-router-dom";
import "./orderdetails.scss";

function OrderDetails() {
    const navigate = useNavigate();
  return (
    <div className="order-details">

        <img className="back-icon" src="/back-icon.png" alt="" onClick={()=> navigate(-1)}/>

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
                    <p className="minus">-</p>
                    <span>1</span>
                    <p className="add">+</p>
                </div>

            </div>
        </div>

        <div className="order-card">
            <div className="line">
                <span>Sub-Totoal</span>
                <span>N 5,000</span>
            </div>
            <div className="line">
                <span>Delivery Charge</span>
                <span>N 1,000</span>
            </div>
            <div className="line">
                <span>Discount</span>
                <span>N 50</span>
            </div>
            <div className="line">
                <span className="total">Total</span>
                <span className="total">N 5,950</span>
            </div>

            <div className="place-order">
                <span>Place My order</span>
            </div>


        </div>
      
    </div>
  )
}

export default OrderDetails
