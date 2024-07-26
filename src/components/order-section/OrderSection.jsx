import MealMenu from "../meal-menu/MealMenu";
import OrderCards from "../order-cards/OrderCards";
import "./ordersection.scss";

function OrderSection() {
  return (
    <div className="order-section">
        <OrderCards />
        <MealMenu />
        

        </div>

  )
}

export default OrderSection
