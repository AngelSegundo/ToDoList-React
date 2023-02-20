import React from "react";
import './DeleteCard.css'
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";


const DeleteCard = () => {
    const { setShowDelete, id, setId, deleteTask } = useContext(DataContext)

    function handleCancel() {
        setShowDelete(false);
    }

    function handleConfirm() {
        deleteTask(id);
        setId(0);
        setShowDelete(false);
    }

    return (
        <div className="deleteCard">
            <div className="contenedor">
                <p>Are you sure you want to delete this task?</p>
                <div className="contenedorBtn">
                    <button className="contenedorDeleteBtn" onClick={handleConfirm}>Delete</button>
                    <button className="contenedorCancelBtn" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteCard