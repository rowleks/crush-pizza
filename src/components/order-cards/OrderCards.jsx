import "./ordercards.scss";
import PropTypes from "prop-types";
import { orderBurger, orderPizza, orderShawarma } from "../../data";

OrderCards.propTypes = {
  selectedSnack: PropTypes.string,
};

function OrderCards({ selectedSnack }) {
  let items = [];

  // Determine which items to display based on selectedSnack
  switch (selectedSnack) {
    case 'pizza':
      items = orderPizza;
      break;
    case 'burger':
      items = orderBurger;
      break;
    case 'shawarma':
      items = orderShawarma;
      break;
    default:
      items = [];
  }

  return (
    <div className="order-cards">
      <div className="often-order">
        <p>Often Ordered</p>
        <span>See all</span>
      </div>

      <div className="order-card">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="info-section">
              <p>{item.name}</p>
              <span>N {item.price}</span>
              <img className="cart" src="/cart-icon1.png" alt="Cart" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderCards;
