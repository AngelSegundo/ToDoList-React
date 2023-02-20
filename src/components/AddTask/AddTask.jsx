import React, { useContext } from "react";
import './AddTask.css'
import Add from "../../assest/Img/add.svg";
import { DataContext } from "../../context/DataContext";


const AddTask = () => {
    const { setShowAdd } = useContext(DataContext)

    function handleClick() {
        setShowAdd(true);
    }

    return (
        <div className="container" onClick={() => handleClick()}>
            <img className="addImg" src={Add} />
            <p className="task-p">Add a task</p>
        </div>
    )
}

export default AddTask;