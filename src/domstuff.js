export { taskCreateForm, createDiv, generateProjectForm}
import { createProject, createTaskView } from "./index.js"

const taskCreateForm = `
<button id="ADDDBUTTOON">ADD BUTTON</button>
<div id="TASKSSSFORM">
<label for="task-title">Title</label>
<input type="text" id="task-title" value = "Project Test" required>

<label for="task-desc">Desc</label>
<input type="text" id="task-desc" value = "Project Test" required>

<label for="date">dATE:</label>
<input type="date" id="date" name="birthday" value = "2001-12-12">

<button id="addTask">
    <span>Add Task</span>
    <i class="fa-solid fa-plus"></i>
</button>

<button id="closeTask">
    <span>CLose Task</span>
    <i class="fa-solid fa-plus"></i>
</button>
<div>`


function createDiv() {
  return document.createElement("div")
}


// project form DOM Stuff for a lack of better naming
const projectForm = document.querySelector("#projForm")
const newProjectButton = document.querySelector("#addNewProject")
const addProjectButton = document.querySelector("#addProject")
const hideProjectFormButton = document.querySelector("#closeProjForm")

function generateProjectForm() { //RENAME THIS TO projectFormController or something later 
  hideProjectForm()
  newProjectButton.addEventListener("click", showProjectForm)
  addProjectButton.addEventListener("click", createProjBleh)
  hideProjectFormButton.addEventListener("click", hideProjectForm)
}

function showProjectForma() {
  document.querySelector("#addProject").addEventListener("click", createProj)
}

function showProjectForm() {  
  projectForm.style.display = "block"
}

function hideProjectForm() {
  projectForm.style.display = "none"  
  projectForm.reset()
}

function createProjBleh() {
  console.log("Hello")
  createProject()
  hideProjectForm()  
}

