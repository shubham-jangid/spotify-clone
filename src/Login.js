import React from "react";
import logo from "./Spotify_Logo_RGB_Green.png";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="loginPage">
      <img href="" src={logo} alt="Spotify logo" />
      <a href={`${loginUrl}`}>Login</a>
    </div>
  );
}

export default Login;
