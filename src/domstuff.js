// export { taskCreateForm, createDiv, projectFormController, getProjectTitle }
// import { createProject, createTaskView } from "./index.js"
// import { project, allProjects, createProjectObject } from "./project.js"

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