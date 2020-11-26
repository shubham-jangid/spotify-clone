import { CLIENTID } from "./backend.js"

const authorisationEndPoing = "https://accounts.spotify.com/authorize"
const redirectUrl = "http://localhost:3000/"

console.log(CLIENTID);

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"

]

export const getTokenFromUrl = () => {
    return window.location.hash ? window.location.hash.split("=")[1].split("&")[0] : false


}

export const loginUrl = `${authorisationEndPoing}?response_type=token&client_id=${CLIENTID}&scope=${scopes ? scopes.join("%20") : ""}&redirect_uri=${redirectUrl}&show_dialog=true`