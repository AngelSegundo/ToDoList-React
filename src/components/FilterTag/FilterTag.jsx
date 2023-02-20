import React from "react";
import './FilterTag.css'

const FilterTag = ({ name }) => {
    return (
        <div className="filterBox">
            <h3 className="tagName">{name}</h3>
        </div>
    )
}

export default FilterTag