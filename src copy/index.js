//////// notes
////// 1. ADD PRIORITY CHECKBOX FOR TASKS
/// 2. ADD 1WEEK CALENDARY ON SIDEBAR
//3 ADD DUE TODAY ON SIDEBARD
///4. OPTIONAL MAYBE SORT ITMES BY DATE
///5. ACTUALLY REAFACTOR YOUR CODE LMAO
///6. MAYBE SEGREGATE TASKS FROM INBOX AND PROJECTS
///7. ADD A COMPLETED TASK SIDEBARD WHERE ALL TASKS ARE SHOWN IN ORDER OF COMPLETTION, 
//COMPLETED TASKS CANT BE UNCOMPLETED
// OR 7. GRAY OUT TASKS WHEN CLICK ON COMPLETED TASKS
//8. ADD MODAL TO ADD TASKS AND PROJECTS, also to EDIT TASKS AND PROJECTS

import { taskCreateForm, createDiv, generateProjectForm } from "./domstuff.js"
import './style.css';
export { createProj }

generateProjectForm()

let taskId = 1
let prjId = 1
const allProjects = []

const task = (title, desc, date, priority) => {  
  const id = taskId.toString()
  taskId += 1
  let completed = false  
  return {title, desc, id, priority, completed, date};
}

const project = (title) => {
  const id = prjId.toString()
  const tasks = []
  prjId += 1
  return {title, id, tasks}
}

function deleteTask(e) { 
  allProjects.forEach((value) => {
    value.tasks = value.tasks.filter((val => val.id != e.target.parentNode.id));
  })
  e.target.parentNode.remove();  
}



function checkTask(e) {
  allProjects[0].tasks.forEach((v) => {
    if (v.id === e.target.parentNode.id) {
        v.completed = !v.completed
        e.target.parentNode.classList.toggle("makeTaskGrayed");
    }
  })
}



const createTaskObj = () => {
  const title = document.querySelector("#task-title").value
  const desc = document.querySelector("#task-desc").value
  const date = document.querySelector("#date").value
  const atProject = document.querySelector("#content").classList[0]  
  const tmpTask = task(title, desc, date, "high")
  allProjects[0].tasks.push(tmpTask) 
  allProjects.forEach((value) => {
    if (value.id === atProject && value.id != "1") {
      value.tasks.push(tmpTask)
    }
  })
}





function addTask() {
  document.querySelector("#addTask").addEventListener("click", () => {
    createTaskObj()
      const pN = document.querySelector("#addTask").parentNode.parentNode.classList[0];
      console.log(pN)
      allProjects.forEach((value) => {
      if (value.id === pN) {
        createTaskView(value)
      }
    })  
  })
}

//ADDS NEW PROJECT


function createProj() {
  const pr_title = document.querySelector("#pr-title").value
  const tmpPrj = project(pr_title)
  allProjects.push(tmpPrj)
  renderSideBar()
  createTaskView(allProjects.at(-1))
  console.log(document.querySelector("#addNewProject"))
  const addProjButton = document.querySelector("#addNewProject")
  addProjButton.style.display = "block"
  const projForm = document.querySelector("#projForm")
  projForm.style.display = 'none'
}


function renderSideBar() {
  const projectContainer = document.querySelector("#project-container")
  projectContainer.textContent = ""
  allProjects.forEach((value) => {
    if (value.id == "1") {
      console.log(1)
      const inbx = document.querySelector("#sidebar div")
      inbx.id = "1"
      inbx.addEventListener("click", (e) => {
        allProjects.forEach((value) => {
          if (value.id === e.target.id) {
            createTaskView(value)
          }
        })      
      })
    }
    else {
      const div = createDiv()   
      div.textContent = value.title
      div.id = value.id
      div.addEventListener("click", (e) => {
        allProjects.forEach((value) => {
          if (value.id === e.target.id) {
            createTaskView(value)
          }
        })      
      })
      projectContainer.appendChild(div)
    }
  })
}


const createTaskView = (contProj) => {   
  const taskcontainer = document.querySelector("#content")
  taskcontainer.className = ""
  taskcontainer.classList.add(contProj.id)
  taskcontainer.innerHTML = taskCreateForm
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
    delete_btn.addEventListener("click", deleteTask)
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
    taskCheck.addEventListener("click", checkTask)
    taskdiv.appendChild(taskCheck)    

    taskcontainer.appendChild(taskdiv)  
  })
  const TASKFROM = document.querySelector("#TASKSSSFORM")
  TASKFROM.style.display = "none"

  document.querySelector("#closeTask").addEventListener("click", () => {
    const TASKFROM = document.querySelector("#TASKSSSFORM")
    TASKFROM.style.display = "none"
  })

  document.querySelector("#ADDDBUTTOON").addEventListener("click", () => {
    console.log("Hi")
    const TASKFROM = document.querySelector("#TASKSSSFORM")
    TASKFROM.style.display = "block"
  })
  

  addTask()
}

const inbox = project("Inbox")
allProjects.push(inbox)
renderSideBar()

createTaskView(allProjects[0])


