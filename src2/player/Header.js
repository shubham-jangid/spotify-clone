import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import "./css/Header.css";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user, dispatch }] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, Songs, or Podcasts "
        />
      </div>
      <div className="header_right">
        <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
