import "./Login.css";
import { loginUrl } from "../Spotify";

function Login() {
  return (
    <div className="login ">
      <div>
        <img
          src="/Maggify.png"
          alt=""
        ></img>
      </div>

      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
