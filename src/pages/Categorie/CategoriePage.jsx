import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./CategoriePage.css";

import Logo from "../../assest/Img/Logo.png"
import TaskFill from "../../assest/Img/task.png";
import Folder from "../../assest/Img/folder.svg";
import Filter from "../../assest/Img/filter.svg";

import { DataContext } from "../../context/DataContext";

import SideBarItem from "../../components/SideBarItem/SideBarItem";
import ExpandSideBarItem from "../../components/ExpandSideBarItem/ExpandSideBarItem";
import TaskCard from "../../components/TaskCard/TaskCard";
import AddTask from "../../components/AddTask/AddTask";
import FilterTag from "../../components/FilterTag/FilterTag";
import DeleteCard from "../../components/DeleteCard/DeleteCard";
import AddCard from "../../components/AddCard/AddCard";
import AddCategorieCard from "../../components/AddCategorieCard/AddCategorieCard";

const CategoriePage = () => {
  const { name } = useParams()

  const { taskList, doneTasks, notDoneTasks, showDelete, showAdd, showTags } = useContext(DataContext)

  const [listToDisplay, setListToDisplay] = useState(0);

  const listOfLists = [
    taskList.filter(task => task.categorie == name),
    doneTasks.filter(task => task.categorie == name),
    notDoneTasks.filter(task => task.categorie == name)]

  const [allActive, setAllActive] = useState(true);
  const [doneActive, setDoneActive] = useState(false);
  const [notDoneActive, setNotDoneActive] = useState(false);

  function showAll() {
    setListToDisplay(0);
    setAllActive(true);
    setDoneActive(false);
    setNotDoneActive(false);
  }

  function showDone() {
    setListToDisplay(1);
    setAllActive(false);
    setDoneActive(true);
    setNotDoneActive(false);
  }

  function showNotDone() {
    setListToDisplay(2);
    setAllActive(false);
    setDoneActive(false);
    setNotDoneActive(true);
  }

  return (

    <div className="page">

      <nav className="navBar">
        <img className="logoImg" src={Logo} />

        <div className="links">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <SideBarItem icon={TaskFill} name="All Tasks"></SideBarItem>
          </Link>
          <ExpandSideBarItem icon={Folder} name="Categories"></ExpandSideBarItem>
        </div>
      </nav>

      <main>
        <h1>📑 To Do List: 📑</h1>
        <h1><span>{name}</span></h1>
        <div className="titleAndFilter">
          <div onClick={showAll}><FilterTag name="All" active={allActive} /></div>
          <div onClick={showDone}><FilterTag name="Done" active={doneActive} /></div>
          <div onClick={showNotDone}><FilterTag name="Not done" active={notDoneActive} /></div>
          <img className="filterIcon" src={Filter} />
        </div>
        {listOfLists[listToDisplay].map(task => <TaskCard id={task.id} name={task.title} list={task.categorie} color={task.color} done={task.done} />)}
        <AddTask />
      </main >
      {showDelete && <DeleteCard />}
      {showAdd && <AddCard />}
      {showTags && <AddCategorieCard />}
    </div>
  )
}

export default CategoriePage;