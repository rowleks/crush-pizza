import { useNavigate } from "react-router-dom";
import "./cart.scss";

function Cart() {

    const navigate = useNavigate();
  return (
    <div className="cart-page">
        <div className="image-section">
            <img onClick={()=> navigate(-1)} className="go-back" src="/back-icon.png" alt="" />
            <img className="cart-pic" src="/cart-pic.png" alt="" />
        </div>

       <div className="details-section">
            <div className="popular">
                <span>Popular</span>
                <div className="group1">
                    <img src="/location.png" alt="" />
                    <img src="/fave.png" alt="" />
                </div>
            </div>

            
                <div className="title">
                    <h2>Chicken Pizza</h2>
                    <span>Promo Pack</span>
                </div>

            <div className="ratings">
               <img src="/rating-star.png" alt="" />
               <span>4.5 Rating</span>
               <img src="/rating-cart.png" alt="" />
               <span>2000+ Orders</span>
            </div>

            <div className="description">
                <span>Sink your teeth into savings with our mouthwatering Chicken Burger Promo! 🍔🔥 </span>
            </div>

        <div className="add-cart">
            <span>Add to Cart</span>
        </div>


       </div>
      
    </div>
  )
}

export default Cart
