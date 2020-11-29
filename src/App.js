import React, { useEffect, useState } from "react";

import SpotifyWebApi from "spotify-web-api-js";

import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import { useStateValue } from "./StateProvider";

import Player from "./player/Player";
import "./App.css";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const _token = getTokenFromUrl();
    document.location.hash = "";

    if (_token) {
      spotifyApi.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotifyApi
        .getMe()
        .then((data) => {
          dispatch({
            type: "SET_USER",
            user: data,
          });
        })
        .catch((err) => console.log(err));

      spotifyApi
        .getUserPlaylists(token)
        .then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  console.log(user);
  console.log(token);

  return <>{token ? <Player /> : <Login />}</>;
}

export default App;
