import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import "./css/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          src="https://i.picsum.photos/id/941/200/200.jpg?hmac=kQpV3E7TgV1yMW4b1IDbV6zJqEvKVw9CTK4RkI14kmQ"
          alt="SongImage"
        />
        <div className="footer_songInfo">
          <h4>song</h4>
          <p>paragraph</p>
        </div>
      </div>
      <div className="footer_menu">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon />
        <PlayCircleOutlineIcon className="footer_icon" />
        <SkipNextIcon />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
