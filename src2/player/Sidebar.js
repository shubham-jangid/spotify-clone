import React from "react";
import "./css/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "../StateProvider";

const Sidebar = () => {
  const [{ user, playlists }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Logo"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong>
        <p className="playlist"> Playlist</p>
      </strong>

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
      {/* {playlists?.items?.map((playlist) => {
        return <SidebarOption title={playlist.name} />;
      })} */}
      <hr />
    </div>
  );
};

export default Sidebar;
