import React from "react";
import "./SideBarItem.css"

const SideBarItem =({name, icon})=>{
    return(
        <div className="sidebarItem">
            <img className="sidebarItemIcon" src={icon}/>
            <h3 className="sidebarItemName">{name}</h3>
        </div>
    )
}

export default SideBarItem;