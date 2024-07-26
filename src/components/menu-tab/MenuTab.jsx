import "./menutab.scss";

function MenuTab() {
  return (
    <>
    <div className="menu-tab">
        <div className="snack">
            <img src="/burger.png" alt="" />
            <span>Burger</span>
        </div>
        <div className="snack">
            <img src="/pizza.png" alt="" />
            <span>Pizza</span>
        </div>
        <div className="snack">
            <img src="/hotdog.png" alt="" />
            <span>Sharwarma</span>
        </div>
      
    </div>
    </>
  )
}

export default MenuTab
