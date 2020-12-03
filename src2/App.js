import React, { useEffect, useState } from "react";

import SpotifyWebApi from "spotify-web-api-js";

import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import { useStateValue } from "./StateProvider";

import Player from "./player/Player";
import "./App.css";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [{ token, user }, dispatch] = useStateValue();

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
        .then((user) => {
          console.log(user.id);

          dispatch({
            type: "SET_USER",
            user: user,
          });
          return user;
        })
        // .then((data) => {
        //   spotifyApi.getUserPlaylists(`${data.id}`).then((playlists) => {
        //     console.log(data);

        //     dispatch({
        //       type: "SET_PLAYLISTS",
        //       playlists: playlists,
        //     });
        //   });
        // })
        .catch((err) => console.log(err));

      // fetch(`https://api.spotify.com/v1/users/${user.id}/playlists`, {});

      spotifyApi
        .getUserPlaylists()
        .then((playlists) => {
          console.log(user);

          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return <>{token ? <Player /> : <Login />}</>;
}

export default App;
