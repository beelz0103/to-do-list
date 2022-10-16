export { project, allProjects, createProjectObject, projectManipulator, renderInbox }
import { createTaskView } from "./index.js"
import { createNewTaskView } from "./task.js"
let prjId = 1
const allProjects = []

const project = (title) => {
  const id = prjId.toString()
  const tasks = []
  prjId += 1
  return {title, id, tasks}
}

const createProjectObject = () => {
  const projecValues = projectManipulator.getProjectValues()
  const projecTitle = projecValues.title
  const newProject = project(projecTitle)
  allProjects.push(newProject)
}

function assignTaskContainerClass(proj) {
  const taskMainContainer = document.querySelector("#content-container")
  taskMainContainer.classList = ""
  taskMainContainer.classList.add(proj.id)
  createNewTaskView(proj)   
}

const projectDOM = () => {
  const projectForm = document.querySelector("#projForm")
  const newProjectButton = document.querySelector("#addNewProject")
  const addProjectButton = document.querySelector("#addProject")
  const hideProjectFormButton = document.querySelector("#closeProjForm")

  const createDiv = () => {
    return document.createElement("div")
  }

  function projectFormController() { //RENAME THIS TO projectFormController or something later 
    hideProjectForm()
    newProjectButton.addEventListener("click", showProjectForm)
    addProjectButton.addEventListener("click", addProject)
    hideProjectFormButton.addEventListener("click", hideProjectForm)
  }
  
  function showProjectForm() {  
    projectForm.style.display = "block"
  }
  
  function hideProjectForm() {
    projectForm.style.display = "none"  
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
  
  function getProjectTitle() {
    return document.querySelector("#pr-title").value
  }
  
  function createProject() {
    createProjectObject()
    renderSideBarProjectOnly()
    assignTaskContainerClass(allProjects.at(-1))
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
    const div = createDiv()   
    div.textContent = prj.title
    div.id = prj.id
    div.addEventListener("click", () => {
      assignTaskContainerClass(prj)
      
    })
    return div
  }



  return { projectFormController, getProjectTitle, getProjectValues }
}

const projectManipulator = projectDOM()

function renderInbox() {
  const inbx = document.querySelector("#sidebar div")
  inbx.id = "1"
  inbx.addEventListener("click", () => {
    assignTaskContainerClass(allProjects[0])  
  })
  assignTaskContainerClass(allProjects[0])  
}

const inbox = project("Inbox")
allProjects.push(inbox)