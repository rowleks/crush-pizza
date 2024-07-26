import { useState } from "react";
import ImageSlider from "../../components/image-slider/ImageSlider";
import MenuTab from "../../components/menu-tab/MenuTab";
import Navbar from "../../components/navbar/Navbar";
import Navmenu from "../../components/navmenu/Navmenu";
import OrderSection from "../../components/order-section/OrderSection";
import "./home.scss";

function Home() {
  const [selectedSnack, setSelectedSnack] = useState(null);

  return (
    <div className="home">
      <Navbar />
      
      <div className="view">
        <div className="search">
          <img src="/search-icon.png" alt="" />
          <input type="text" placeholder="Search for favourite pizza" />
        </div>
        
        <ImageSlider />
        <MenuTab selectedSnack={selectedSnack} setSelectedSnack={setSelectedSnack} />
        <OrderSection selectedSnack={selectedSnack} />
      </div>
      
      <div className="fixed-menu">
        <Navmenu />
      </div>
    </div>
  );
}

export default Home;
