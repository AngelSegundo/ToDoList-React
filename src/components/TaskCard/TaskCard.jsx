import React, { useContext } from "react";
import "./TaskCard.css";

import Erase from "../../assest/Img/erase.svg";
import Low from "../../assest/Img/lowPriority.png";
import Medium from "../../assest/Img/mediumPriority.png";
import High from "../../assest/Img/highPriority.png";

import { DataContext } from "../../context/DataContext";

const TaskCard = ({ id, name, list, color, done, priority, create}) => {

    const { setShowDelete, setId, checkTask } = useContext(DataContext)
    const status = done ? "completed" : "notDone"

    function handleCheck() {
        checkTask(id);
    }

    function handleDelete() {
        setShowDelete(true);
        setId(id);
    }

    return (
        <div className="cardBox">
            <div className="checkbox-con">
                <input id="checkbox" type="checkbox" onClick={() => handleCheck()}></input>
            </div>
            <div className="description">
                <h2 className={status}>{name}</h2>
                <div className="listBelong" style={{ backgroundColor: `${color}` }}>
                    <p className={status}>{list}</p>
                    <p className={status}> Created on: {create}</p>
                    <br />
                    {/* <p>Completed on: {create}</p> */}
                </div>
            </div>
            <img className="eraseIcon" src={Erase} onClick={handleDelete} />
            <div className="priority">
                <div className="priority">
                    <h5>{priority}</h5>
                </div>
                <div>
                    {priority == "Low" && <img className="priorityIcon" src={Low} />}
                    {priority == "Medium" && <img className="priorityIcon" src={Medium} />}
                    {priority == "High" && <img className="priorityIcon" src={High} />}
                </div>
            </div>
        </div >
    )
}

export default TaskCard