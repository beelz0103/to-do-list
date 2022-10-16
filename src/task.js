import { allProjects, project} from "./project.js"
import { createTaskView } from "./index.js"
export { task, tasktManipulator, createTaskObj, createNewTaskView }

let taskId = 1

const task = (title, desc, date, priority) => {  
  const id = taskId.toString()
  let completed = false 
  taskId += 1
  return {title, desc, date, priority, id, completed};
}

const createTaskObj = () => {
  console.log("USED TASK MODULE")
  const taskValues = tasktManipulator.getTaskValues()
  const title = taskValues.title
  const desc = taskValues.desc
  const date = taskValues.date
  const priority = taskValues.priority
  const newTask = task(title, desc, date, priority)
  addTaskObjToArray(newTask)
}

const addTaskObjToArray = (newTask) => {
  const projectID = document.querySelector("#content").classList[0] 
  allProjects.forEach((value) => {
    if (value.id == "1") {
      value.tasks.push(newTask)
    }
    else if (value.id === projectID) {
      value.tasks.push(newTask)
    }
  })
}

const taskDOM = () => {
  const taskForm = document.querySelector("#taskForm")
  const newTaskButton = document.querySelector("#addNewTask")
  const addTaskButton = document.querySelector("#add-Task")
  const hideTaskFormButton = document.querySelector("#closeTaskForm")

  const createDiv = () => {
    return document.createElement("div")
  }

  function taskFormController() { //RENAME THIS TO projectFormController or something later 
    hideTaskForm()
    newTaskButton.addEventListener("click", showTaskForm)
    addTaskButton.addEventListener("click", addTask)
    hideTaskFormButton.addEventListener("click", hideTaskForm)
  }
  
  function showTaskForm() {  
    taskForm.style.display = "block"
  }
  
  function hideTaskForm() {
    taskForm.style.display = "none"  
    taskForm.reset()
  }
  
  function addTask() {
    createTask()
    hideTaskForm()  
  }

  const getTaskValues = () => { 
    const title = document.querySelector("#task-title").value
    const desc = document.querySelector("#task-desc").value
    const date = document.querySelector("#date").value
    const priority = document.querySelector("#task-priority").value
    return { title, desc, date, priority }
  }

  function getProjectFromID() {
    const taskMainContainer = document.querySelector("#content-container")
    const projectId = taskMainContainer.classList[0]
    let project = null
    console.log(typeof(projectId))
    console.log(allProjects)
    allProjects.forEach((value) => {
      if (value.id == projectId) {
        project = value
      }
    })
    return project
  }

  function createTask() {
    console.log("LMAO TASK WAS CREATED")
    createTaskObj()
    const currentProject = getProjectFromID()
    console.log(currentProject)
    createNewTaskView(currentProject) //uses project id to generare task view
  }

  return { getTaskValues,  taskFormController}
}

const tasktManipulator = taskDOM()

// function createNewTaskView() {
//   console.log("Hi")
// }




const createNewTaskView = (contProj) => {   
  const taskcontainer = document.querySelector("#content")
  taskcontainer.className = ""
  taskcontainer.textContent = ""
  console.log(contProj)
  taskcontainer.classList.add(contProj.id)
  contProj.tasks.forEach((value) => {
    const taskdiv = document.createElement("div")
    taskdiv.classList.add("taskdiv")
    taskdiv.id = value.id
    const title = document.createElement("div")
    title.textContent = value.title
    const desc = document.createElement("div")
    desc.textContent = value.desc
    const date = document.createElement("div")
    date.textContent = value.date
    taskdiv.appendChild(title)
    taskdiv.appendChild(desc)
    taskdiv.appendChild(date)


    const delete_btn = document.createElement("button")  
    delete_btn.textContent = "Dlt"

    taskdiv.appendChild(delete_btn)  
   
    const taskCheck = document.createElement("input")    
    taskCheck.id = "checked"
    taskCheck.type = "checkbox"
    if (value.completed == false) {
      taskCheck.checked = false
    }
    else {
      taskCheck.checked = true
    }    
    taskdiv.appendChild(taskCheck)    

    taskcontainer.appendChild(taskdiv)  
  })
}