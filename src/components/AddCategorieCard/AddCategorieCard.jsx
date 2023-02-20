import React, { useContext, useState } from "react";
import './AddCategorieCard.css'
import { DataContext } from "../../context/DataContext";
import { v4 as uuidv4 } from 'uuid';


const AddCategorieCard = () => {

    const { setShowTags, addTags, categList } = useContext(DataContext)

    const [tagName, setTagName] = useState("")
    const [tagColor, setTagColor] = useState("")


    function newTagValue(e) {
        setTagName(e.target.value)
        console.log(tagName);
    }

    function newTagColor(e) {
        setTagColor(e.target.value)
    }

    function tagCancel() {
        setShowTags(false);
    }

    function handleAddTag() {
        const newCat = {
            id: uuidv4(),
            name: tagName,
            color: tagColor,
        }

        console.log(newCat);
        console.log(categList);
        setShowTags(false)
        addTags(newCat)
    }

    return (
        <div className="box">
            <div className="CategorieBox">
                <p>New Categorie</p>
                <input className="input" placeholder="Add new categorie" onChange={newTagValue} value={tagName} />
                <div className="selectedColor">
                    <p>Color</p>
                    <input type="color" value={tagColor} onChange={newTagColor} style={{ width: 210 }} />
                </div>

                <div className="buttonsCat">
                    <button className="catAddBtn" onClick={() => handleAddTag()}>Add</button>
                    <button className="catCancelBtn" onClick={() => tagCancel()}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AddCategorieCard;