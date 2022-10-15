export { taskCreateForm, createDiv, generateProjectForm}
import { createProj } from "./index.js"

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

function generateProjectForm() {
  const projForm = document.querySelector("#projForm")
  projForm.style.display = 'none'
  document.querySelector("#addNewProject").addEventListener("click", showProjectForm)
}

function showProjectForm() {
  const addProjButton = document.querySelector("#addNewProject")
  addProjButton.style.display = "none"
  const projForm = document.querySelector("#projForm")
  projForm.style.display = 'block'

  // const addProjButton = document.querySelector("#addNewProject")
  // const projForm = document.querySelector("#projForm")
  // projForm.display = `block`
  // addProjButton.display = "none"

  document.querySelector("#addProject").addEventListener("click", createProj)
  document.querySelector("#closeProjForm").addEventListener("click", () => {
    addProjButton.style.display = "block"
    projForm.style.display = 'none'
  })
}

