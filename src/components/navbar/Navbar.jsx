import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <div>
        <div className="header">
            <img src="/ham-icon.png" alt="" />
            <Link to="/">
            <div className="mid">
                <img src="/logo.png" alt="" />
                {/* <span>Under the Duvet</span> */}
            </div>
            </Link>
            
            <Link to="/signup"><img src="/profile-pic.png" alt="" className="profile" /></Link>
            
        </div>
      
    </div>
  )
}

export default Navbar
