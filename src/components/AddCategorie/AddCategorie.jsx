import React, { useContext } from "react";
import './AddCategorie.css'
import Add from "../../assest/Img/add.svg";
import { DataContext } from "../../context/DataContext";


const AddCategorie = () => {
    const { setShowTags } = useContext(DataContext)

    function handleClick() {
        setShowTags(true);
    }

    return (
        <div className="containerAddTag" onClick={() => handleClick()}>
            <img className="addTagImg" src={Add} />
            <p className="tag-text">Add Categorie</p>
        </div>
    )
}

export default AddCategorie;