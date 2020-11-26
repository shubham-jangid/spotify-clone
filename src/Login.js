import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js"
import logo from "./Spotify_Logo_RGB_Green.png"
import { loginUrl, getTokenFromUrl } from "./spotify"

var spotifyApi = new SpotifyWebApi();

function Login() {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const _token = getTokenFromUrl();
    document.location.hash = "";
    if (_token) {
      setToken(_token)
      spotifyApi.setAccessToken(_token);
      spotifyApi.getMe().then(data => {
        console.log(data);
      }).catch(err => (console.log(err)));
    }

  }, []);

  return (
    <div className="loginPage">
      <img href="" src={logo} alt="Spotify logo" />

      <a href={`${loginUrl}`}>Login</a>
    </div>
  );
}

export default Login;
