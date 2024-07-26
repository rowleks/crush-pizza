import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./imageslider.scss";


function ImageSlider() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };

  return (
<div className="slider-container">
      <Slider {...settings}>
        <img src="/slide1.png" alt="" />
        <img src="/slide2.png" alt="" />
        <img src="/slide4.png" alt="" />
        <img src="/slide5.png" alt="" />
      </Slider>
    </div>
  )
}

export default ImageSlider
