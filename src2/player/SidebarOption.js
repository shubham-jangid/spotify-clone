import React from "react";
import "./css/SidebarOption.css";
const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? <h5>{title}</h5> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
