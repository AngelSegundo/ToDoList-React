import React, { useState, useContext } from "react";
import "./ExpandSideBarItem.css"
import Arrow from "../../assest/Img/arrow.svg"
import CategorieItem from "../CategorieItem/CategorieItem";
import Add from "../../assest/Img/add.svg";
import { DataContext } from "../../context/DataContext";
import AddCategorie from "../AddCategorie/AddCategorie";
import AddCategorieCard from "../AddCategorieCard/AddCategorieCard";


const ExpandSideBarItem = ({ name, icon }) => {

    const [active, setActive] = useState(false);


    const { categList, showTags, setShowTags } = useContext(DataContext)

    function handleActivate() {
        setActive(!active);
    }

    function showAddTags() {
        setShowTags(true)
    }

    return (
        <div className="outerBox" onClick={() => handleActivate()}>
            <div className="innerBox" >
                <img className="icon" src={icon} />
                <h3>{name}</h3>
                <img className="arrow" src={Arrow} />
            </div>
            {active &&
                <div className="catArea">
                    {categList.map(cat => <CategorieItem name={cat.name} color={cat.color} />)}
                    <AddCategorie />
                </div>
            }
        </div>
    )
}

export default ExpandSideBarItem;