import React, { useContext, useState } from "react";
import './AddCard.css'
import { DataContext } from "../../context/DataContext";
import { v4 as uuidv4 } from 'uuid';


const AddCard = () => {
    const { addTask, categList, priorityList, setShowAdd } = useContext(DataContext)

    

    const [taskName, setTaskName] = useState("")
    const [taskCat, setTaskCat] = useState(categList.findIndex((cat) => cat.name === "No Category"))
    const [taskPriority, setTaskPriority] = useState(priorityList.findIndex((priority) => priority.name == "High"))
    const date = new Date()

    function handleTyping(e) {
        setTaskName(e.target.value)
    }

    function handleCancel() {
        setShowAdd(false);
    }

    function handleAdd() {
        console.log("categList:", categList);
        console.log("taskCat:", taskCat);
        const newTask = {
            id: uuidv4(),
            title: taskName,
            categorie: categList[taskCat].name,
            color: categList[taskCat].color,
            priority: priorityList[taskPriority].name,
            createDate: date.toLocaleDateString(),
            done: false,
        }

        setShowAdd(false)
        addTask(newTask)
    }

    function handleChange() {
        let selected = document.getElementById("select")
        setTaskCat(selected.options[(selected.selectedIndex)].value)
    }

    function handleChangePriority() {
        let seletedPriority = document.getElementById("selectPrio")
        setTaskPriority(Number(seletedPriority.options[(seletedPriority.selectedIndex)].value))
    }

    return (
        <div className="box">
            <div className="taskBox">
                <p>New Task</p>
                <input className="input" placeholder="Task" onChange={handleTyping} value={taskName} />
                <p>Categorie</p>
                <select id="select" onChange={handleChange}>
                    {categList.map((cat) => {
                        console.log("cat:", cat);
                        return <option key={cat.id} value={cat.id}>{cat.name}</option>
                    })}
                </select>
                <div className="priority">
                    <p>Priority</p>
                    <div>
                        <select id="selectPrio" onChange={handleChangePriority}>
                            {priorityList.map((priority) => <option key={priority.id} value={priority.id}>{priority.name}</option>)}
                        </select>
                    </div>
                </div>

                <div className="buttons">
                    <button className="addBtn" onClick={() => handleAdd()}>Add</button>
                    <button className="cancelBtn" onClick={() => handleCancel()}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AddCard;