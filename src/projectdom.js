export { currentProjectId, currentProject, projectFormController, renderInbox, hideProjectForm }
import { allProjects, createProjectObject } from "./project.js"
import { taskManipulator, taskView } from "./taskdom.js"

const projectForm = document.querySelector("#projForm")
const newProjectButton = document.querySelector("#addNewProject")
const addProjectButton = document.querySelector("#addProject")
const hideProjectFormButton = document.querySelector("#closeProjForm")

function projectFormController() { //RENAME THIS TO projectFormController or something later 
  hideProjectForm()
  newProjectButton.addEventListener("click", showProjectForm)
  addProjectButton.addEventListener("click", addProject)
  hideProjectFormButton.addEventListener("click", hideProjectForm)
}

function showProjectForm() {  
  projectForm.style.display = "block"
  taskManipulator.hideTaskForm()
  newProjectButton.style.display = "none"
}

function hideProjectForm() {
  projectForm.style.display = "none"  
  newProjectButton.style.display = "block"
  projectForm.reset()
}

function addProject() {
  createProject()
  hideProjectForm()  
}

const getProjectValues = () => {
  const title = document.querySelector("#pr-title").value    
  return { title }
}

function createProject() {
  const projectValues = getProjectValues()
  createProjectObject(projectValues)
  renderSideBarProjectOnly()
  taskView.createNewTaskView(allProjects.at(-1))       
}  

const renderInbox = () => {
  const inbx = document.querySelector("#sidebar div")
  inbx.id = "1"
  inbx.addEventListener("click", () => {
    taskView.createNewTaskView(allProjects[0])  
  })
  taskView.createNewTaskView(allProjects[0])  
}

function renderSideBarProjectOnly() {
  const projectContainer = document.querySelector("#project-container")
  projectContainer.textContent = ""
  allProjects.forEach((projectObject) => {
    if (projectObject.id != "1") {   
      const projectDiv = createProjectDiv(projectObject)
      projectContainer.appendChild(projectDiv)
    }
  })
}

function createProjectDiv(prj) { //helps renderSideBarProjectOnly() function
  const div = document.createElement("div") 
  div.textContent = prj.title
  div.id = prj.id
  div.addEventListener("click", () => {
    taskView.createNewTaskView(prj)  
  })
  return div
}

const currentProjectId = () => {
  return document.querySelector("#content").classList[0] 
}

const currentProject = () => {
  const projectId = currentProjectId()
  return allProjects.filter(value => value.id == projectId)[0]
}