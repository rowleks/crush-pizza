import ImageSlider from "../../components/image-slider/ImageSlider"
import MenuTab from "../../components/menu-tab/MenuTab"
import Navbar from "../../components/navbar/Navbar"
import OrderSection from "../../components/order-section/OrderSection"
import "./home.scss"

function Home() {
  return (
    <div className="home">

        <Navbar />
        
      <div className="view">

        <div className="search">
            <img src="/search-icon.png" alt="" />
            <input type="text" placeholder="Search for favourite pizza" />
        </div>

            <ImageSlider />
            <MenuTab />
            <OrderSection />

      </div>
    </div>
  )
}

export default Home
