import { allProjects } from "./project.js"
import { currentProjectId } from "./projectdom.js"
export { createTaskObj, updateTaskObj, getTaskObjFromId, deleteTaskObj, checkTaskObj, setTaskId }

let taskId = null

function setTaskId(id) {
  taskId = id
}

const task = (title, desc, date, priority) => {  
  const id = taskId.toString()
  let completed = false 
  taskId += 1
  return {title, desc, date, priority, id, completed};
}

const createTaskObj = (taskValues) => {
  const title = taskValues.title
  const desc = taskValues.desc
  const date = taskValues.date
  const priority = taskValues.priority
  const newTask = task(title, desc, date, priority)
  addTaskObjToArray(newTask)
}

const updateTaskObj = (task, taskValues) => {    
  task.title = taskValues.title
  task.desc = taskValues.desc
  task.date = taskValues.date
  task.priority = taskValues.priority
}

const getTaskObjFromId = (taskId) => {
  return allProjects[0].tasks.filter(task => task.id == taskId).at(0)
}

function deleteTaskObj(taskId) { 
  allProjects.forEach((project) => {
    project.tasks = project.tasks.filter((task => task.id != taskId));
  })
}

function checkTaskObj(taskId) { 
  const task = allProjects[0].tasks.filter(task => task.id == taskId).at(0)
  task.completed = !task.completed
}

const addTaskObjToArray = (newTask) => {
  allProjects.forEach((value) => {
    if (value.id == "1" && value.title == "Inbox") {
      value.tasks.push(newTask)
    }
    else if (value.id === currentProjectId()) {
      value.tasks.push(newTask)
    }
  })
}