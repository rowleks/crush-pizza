import { Link, useNavigate } from "react-router-dom";
import "./signup.scss";

function Signup() {

    const navigate = useNavigate();
  return (
    <div className="signup">


        <img className="back-icon" src="/back-icon.png" alt="" onClick={()=> navigate(-1)}/>


        <Link to="/">
        <div className="logo">
            <img src="/logo.png" alt="" />
        </div>
        
        </Link>

        <div className="log-options">
            <div className="socials">
                <div className="social">
                    <img src="/google-icon.png" alt="" />
                    <span>Continue with Google</span>
                </div>
                <div className="social">
                <img src="/fb-icon.png" alt="" />
                <span>Continue with Facebook</span>
                </div>
                <div className="social">
                <img src="/apple-icon2.png" alt="" id="ap-img"/>
                <span>Continue with Apple</span>
                </div>

                <div className="hr-lines">
                    <span className="line"></span>
                    <span>or</span>
                    <span className="line"></span>
                </div>

                <Link to="/login">
                <div className="log-in">
                    <span>Log in</span>
                </div>
                </Link>
            </div>
        </div>

      
    </div>
  )
}

export default Signup
