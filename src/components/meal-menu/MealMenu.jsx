import "./mealmenu.scss";

function MealMenu() {
  return (
    <div className="meal-menu">
        <div className="popular-order">
            <p>Popular Meal Menu</p>
            <span>See all</span>
        </div>

        <div className="card">
            <img src="menu-pic.png" alt="" />
            <div className="info">
                <div className="item">
                    <p>Pepper Pizza</p>
                    <span>5kg box of Pizza</span>
                </div>
                <p className="price">N 800</p>

            </div>
        </div>

        <div className="card">
            <img src="menu-pic.png" alt="" />
            <div className="info">
                <div className="item">
                    <p>Pepper Pizza</p>
                    <span>5kg box of Pizza</span>
                </div>
               <p className="price">N 800</p>

            </div>
        </div>
      
    </div>
  )
}

export default MealMenu
