import { createContext, useState, useEffect } from "react";


const DataContext = createContext()

const DataContextProvider = ({ children }) => {

  const date = new Date()

  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [id, setId] = useState(0);

  const [categList, setCategList] = useState([
    {
      id: 0,
      name: "No Category",
      color: "#afafaf"
    },
    {
      id: 1,
      name: "Home",
      color: "#FF9C9C"
    },
    {
      id: 2,
      name: "School",
      color: "#FFD79C"
    },
    {
      id: 3,
      name: "Shopping list",
      color: "#9CD0FF"
    }
  ])

  const [priorityList, setPriorityList] = useState([
    {
      id: 0,
      name: "High",
    },
    {
      id: 1,
      name: "Medium",
    },
    {
      id: 2,
      name: "Low",
    },
  ])

  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "Example task",
      done: false,
      categorie: "Home",
      priority: "High",
      createDate: date.toLocaleDateString(),
      color: "#FF9C9C",
    },
    {
      id: 2,
      title: "Example task 2",
      done: false,
      categorie: "School",
      priority: "Medium",
      createDate: date.toLocaleDateString(),
      color: "#FFD79C",
    },
    {
      id: 3,
      title: "Example task 3",
      done: false,
      categorie: "Shopping list",
      priority: "Low",
      createDate: date.toLocaleDateString(),
      color: "#9CD0FF",
    },
  ])

  const [doneTasks, setDoneTasks] = useState(taskList.filter((task) => task.done == true))
  const [notDoneTasks, setNotDoneTasks] = useState(taskList.filter((task) => task.done == false))

  const addTask = (task) => {
    taskList.push(task)
    setTaskList([...taskList])
    setNotDoneTasks([...notDoneTasks, task])
  }

  const addTags = (tag) => {
    categList.push(tag)
    setCategList([...categList])
  }

  const checkTask = (id) => {
    taskList.filter((task) => {
      if (task.id === id) {
        task.done = !task.done
        setTaskList([...taskList])
        setDoneTasks(taskList.filter((task) => task.done == true))
        setNotDoneTasks(taskList.filter((task) => task.done != true))
      }
    })
  }

  const deleteTask = (id) => {
    const index = taskList.findIndex((task) => task.id == id)
    taskList.splice(index, 1)
    setTaskList([...taskList])
    setDoneTasks(taskList.filter((task) => task.done == true))
    setNotDoneTasks(taskList.filter((task) => task.done != true))
  }

  return (
    <DataContext.Provider value={{
      showAdd, setShowAdd,
      id, setId,
      categList, setCategList,
      priorityList, setPriorityList,
      showDelete, setShowDelete,
      showTags, setShowTags,
      taskList, setTaskList,
      doneTasks, setDoneTasks,
      notDoneTasks, setNotDoneTasks,
      addTask,
      addTags,
      checkTask,
      deleteTask,
    }}>
      {children}
    </DataContext.Provider>
  )

}

export { DataContext, DataContextProvider }