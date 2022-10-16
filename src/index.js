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

// import { taskCreateForm, createDiv, projectFormController, getProjectTitle } from "./domstuff.js"
import { project, allProjects, createProjectObject, projectManipulator, renderInbox } from "./project.js"
import { task, tasktManipulator, createTaskObj } from "./task.js"

import './style.css';
export { createTaskView }

const taskCreateForm = `
<button id="ADDDBUTTOON">ADD BUTTON</button>
<div id="TASKSSSFORM">
<label for="task-title">Title</label>
<input type="text" id="task-title" value = "Project Test" required>

<label for="task-desc">Desc</label>
<input type="text" id="task-desc" value = "Project Test" required>

<label for="date">dATE:</label>
<input type="date" id="date" name="birthday" value = "2001-12-12">

<label for="task-priority">Choose a car:</label>
<select id="task-priority" name="priority">
  <option value="low">Low</option>
  <option value="medium" selected>Medium</option>
  <option value="high">High</option>
</select>

<button id="addTask">
    <span>Add Task</span>
    <i class="fa-solid fa-plus"></i>
</button>

<button id="closeTask">
    <span>CLose Task</span>
    <i class="fa-solid fa-plus"></i>
</button>
<div>`

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

renderInbox()
projectManipulator.projectFormController()
tasktManipulator.taskFormController()
