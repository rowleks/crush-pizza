import "./ordercards.scss";

function OrderCards() {
  return (
    <div className="order-cards">
    
      <div className="often-order">
            <p>Often Ordered</p>
            <span>See all</span>
        </div>

        <div className="order-card">
            <div className="card">

            <img src="pizza-pic1.png" alt="" />
            <div className="info-section">
            <p>Extravaganza Pizza</p>
            <span>N5,000</span>

            <img className="cart" src="/cart-icon1.png" alt="" />

            </div>

            </div>
            <div className="card">
            <img src="/pizza-pic2.png" alt="" />
            <div className="info-section">
            <p>Chicken Pizza</p>
            <span>N5,000</span>
            <img className="cart" src="/cart-icon1.png" alt="" />
            </div>
            </div>
    </div>
    </div>
  )
}

export default OrderCards;
