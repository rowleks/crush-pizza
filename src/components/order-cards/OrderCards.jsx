import PropTypes from "prop-types";
import { orderBurger, orderPizza, orderShawarma } from "../../data";
import { Link } from "react-router-dom";
import "./ordercards.scss";

OrderCards.propTypes = {
  selectedSnack: PropTypes.string,
};

OrderCards.defaultProps = {
  selectedSnack: 'burger',
};

function OrderCards({ selectedSnack }) {
  let items = [];

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
        {items.map((item) => {
          const cardContent = (
            <div className="card" key={item.id}>
              <img src={item.image} alt={`${item.name} image`} />
              <div className="info-section">
                <p>{item.name}</p>
                <span>N {item.price.toLocaleString()}</span>
                <img className="cart" src="/cart-icon1.png" alt="Cart" />
              </div>
            </div>
          );

          return item.name === "Chicken Pizza" ? (
            <Link to="/add-cart" key={item.id} className="card-link">
              {cardContent}
            </Link>
          ) : (
            cardContent
          );
        })}
      </div>
    </div>
  );
}

export default OrderCards;
