import { useState } from "react";
import "./success.scss";
import { Link } from "react-router-dom";

function Success() {
  const [rating, setRating] = useState(0); // Initial state set to 0 (no stars filled)

  const handleStarClick = (index) => {
    setRating(index + 1); // Update the rating state based on the clicked star
  };

  return (
    <div className="success-page">
      <img src="/success.png" alt="" />
      <div className="text">
        <p>Thank You!</p>
        <p>Order Completed</p>
      </div>

      <span>Please rate your driver</span>

      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={index < rating ? "/fill-star.png" : "/unfill-star.png"}
            alt="star"
            onClick={() => handleStarClick(index)}
            style={{ cursor: "pointer" }} // Change cursor to pointer on hover
          />
        ))}
      </div>

      <div className="feedback">
        <img src="/write.png" alt="" />
        <input type="text" placeholder="Leave feedback" />
      </div>

      <div className="buttons">
        <span className="submit">Submit</span>
        <Link to='/'>
        <span className="skip">Skip</span>
        </Link>
      </div>
    </div>
  );
}

export default Success;
