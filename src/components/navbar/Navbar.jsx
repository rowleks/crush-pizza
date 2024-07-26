import "./navbar.scss";

function Navbar() {
  return (
    <div>
        <div className="header">
            <img src="/ham-icon.png" alt="" />
            <div className="mid">
                <img src="/location-icon.png" alt="" />
                <span>Under the Duvet</span>
            </div>
            <img src="/profile-pic.png" alt="" className="profile" />
        </div>
      
    </div>
  )
}

export default Navbar
