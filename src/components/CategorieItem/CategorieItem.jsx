import React, { useContext } from "react";
import "./CategorieItem.css"
import { Link } from "react-router-dom";

const CategorieItem = ({ name, color }) => {

    return (
        <Link to={"/categorie/" + name} style={{ textDecoration: 'none' }}>
            <div className="tags">
                <div className="ColorTag" style={{ color: `${color}` }}></div>
                <p className="listName">{name}</p>
            </div>
        </Link>
    )
}

export default CategorieItem