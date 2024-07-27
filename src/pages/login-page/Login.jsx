import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

function Login() {

    const navigate = useNavigate();
    return (
        <div className="login">
    
    
            <img className="back-icon" src="/back-icon.png" alt="" onClick={()=> navigate(-1)}/>
    
    
            <Link to="/">
            <div className="logo">
                <img src="/logo.png" alt="" />
            </div>
            
            </Link>
    
            <div className="log-options">
                <div className="log-info">
                    <div className="logs">
                        <img src="/mail-icon.png" alt="" />
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="logs">
                    <img src="/lock-icon.png" alt="" />
                    <input type="password" placeholder="Password"/>
                    </div>
                    <div className="remember-me">
                    <input type="checkbox" />
                    <span>Remember me</span>
                    </div>
    
                    <div className="log-in">
                        <span>Log in</span>
                    </div>

                    <span className="fg-pwd">Forgot Password?</span>

                    <div className="hr-lines">
                        <span className="line"></span>
                        <span>or continue with</span>
                        <span className="line"></span>
                    </div>

                    <div className="ss-logs">
                        <img src="google-icon.png" alt="" />
                        <img src="fb-icon.png" alt="" />
                        <img src="apple-icon.png" alt="" />
                    </div>
    
                </div>
            </div>
    
          
        </div>
      )
}

export default Login
