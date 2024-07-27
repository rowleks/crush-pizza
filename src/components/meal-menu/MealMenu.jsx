import { Link } from "react-router-dom";
import "./mealmenu.scss";

function MealMenu() {
  return (
    <div className="meal-menu">
        <div className="popular-order">
            <p>Popular Meal Menu</p>
            <span>See all</span>
        </div>

        <Link to="/add-cart">
        
        
        <div className="card">
            <img src="menu-pic.png" alt="" />
            <div className="info">
                <div className="item">
                    <p>Chicken Pizza</p>
                    <span>5kg box of Pizza</span>
                </div>
                <p className="price">N 1,000</p>

            </div>
        </div>
        </Link>


        <div className="card">
            <img src="menu-pic2.png" alt="" />
            <div className="info">
                <div className="item">
                    <p>Chicken Burger </p>
                    <span>Large sized Burger</span>
                </div>
               <p className="price">N 2,000</p>

            </div>
        </div>
      
    </div>
  )
}

export default MealMenu
