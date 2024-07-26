import { useState } from "react";
import "./navmenu.scss";

function Navmenu() {

    const [selectedNav, setSelectedNav] = useState(null);

    const handleSnackClick = (nav) => {
        setSelectedNav(nav);
      };
  return (
    <div className="navmenu">
        <div 
        className={`home ${selectedNav === 'home' ? 'selected' : ''}`}
        onClick={() => handleSnackClick('home')}>
            <img src="/home-icon.png" alt="" />
        </div>
        <div 
        className={`cart ${selectedNav === 'cart' ? 'selected' : ''}`}
        onClick={() => handleSnackClick('cart')}>
            <img src="/cart-icon.png" alt="" />
        </div>
        <div 
        className={`profile ${selectedNav === 'profile' ? 'selected' : ''}`}
        onClick={() => handleSnackClick('profile')}>
            <img src="/profile-icon.png" alt="" />
        </div>
        <div 
        className={`notif ${selectedNav === 'notif' ? 'selected' : ''}`}
        onClick={() => handleSnackClick('notif')}>
            <img src="/notif-icon.png" alt="" />
        </div>

      
    </div>
  )
}

export default Navmenu
