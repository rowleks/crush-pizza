import MealMenu from "../meal-menu/MealMenu";
import OrderCards from "../order-cards/OrderCards";
import "./ordersection.scss";
import PropTypes from "prop-types"

OrderSection.propTypes = {
  selectedSnack: PropTypes.string,
};

function OrderSection({ selectedSnack }) {
  return (
    <div className="order-section">
        <OrderCards selectedSnack={selectedSnack}/>
        <MealMenu selectedSnack={selectedSnack}/>
        

        </div>

  )
}

export default OrderSection
