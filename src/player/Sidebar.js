import React from "react"
import "./css/Sidebar.css"
import SidebarOption from "./SidebarOption";
const Sidebar =()=>{
    return (
    <div className="sidebar">
        <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Logo"   />

        {/* <SidebarOption title="Home"/> */}
    </div >
    )
}

export default Sidebar;