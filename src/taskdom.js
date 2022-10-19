import { createTaskObj, updateTaskObj, getTaskObjFromId, deleteTaskObj, checkTaskObj } from "./task.js"
import { currentProject, hideProjectForm } from "./projectdom.js"
export { taskManipulator, taskView}


const taskDOM = () => {
  const taskForm = document.querySelector("#taskForm")
  const newTaskButton = document.querySelector("#addNewTask")
  const addTaskButton = document.querySelector("#add-Task")
  const editTaskButton = document.querySelector("#edit-Task")
  const hideTaskFormButton = document.querySelector("#closeTaskForm")

  function taskFormController() { //RENAME THIS TO projectFormController or something later 
    hideTaskForm()    
    newTaskButton.addEventListener("click", showTaskForm)
    addTaskButton.addEventListener("click", addTask)    
    editTaskButton.addEventListener("click", editTask)
    hideTaskFormButton.addEventListener("click", hideTaskForm)
  }

  //create

  function showTaskForm() {      
    hideProjectForm()
    showElement(taskForm)
    focusOnTitle()
    resetTaskForm()
    hideElement(newTaskButton)
  }

  function addTask() {
    createTask()
    hideTaskForm()  
  }

  function createTask() {
    const taskValues = getTaskValues()
    createTaskObj(taskValues)
    taskView.createNewTaskView(currentProject())
  }  

  //remove
  function deleteTask(e) { 
    const taskId = e.target.parentNode.id
    deleteTaskObj(taskId)
    taskManipulator.hideTaskForm()
    hideProjectForm()
    e.target.parentNode.remove();  
  }

  //update
  const showEditForm = (e) => { 
    hideProjectForm()
    showElement(taskForm)
    focusOnTitle()
    const taskId = e.target.id  
    setUpEditForm(taskId)
  }

  function setUpEditForm(id) {
    editTaskButton.className = id
    const task = getTaskObjFromId(id)
    updateEditFormValues(task)
    hideElement(newTaskButton)
    hideElement(addTaskButton)
    showElement(editTaskButton)  
  }

  const updateEditFormValues = (task) => { 
    const title = document.querySelector("#task-title")
    title.value = task.title
    const desc = document.querySelector("#task-desc")
    desc.value = task.desc
    const date = document.querySelector("#date")
    date.value = task.date
    const priority = document.querySelector("#task-priority")
    priority.value = task.priority
  }

  function editTask() {
    const taskId = editTaskButton.className
    const task = getTaskObjFromId(taskId)
    const taskValues = getTaskValues()
    updateTaskObj(task, taskValues)
    hideTaskForm()        
    taskView.createNewTaskView(currentProject()) 
  }

  function checkTask(e) {
    const taskId = e.target.parentNode.id
    checkTaskObj(taskId)
    taskManipulator.hideTaskForm()
    hideProjectForm()
    e.target.parentNode.classList.toggle("makeTaskGrayed")
  }

  //utility functions
  const getTaskValues = () => { 
    const title = document.querySelector("#task-title").value
    const desc = document.querySelector("#task-desc").value
    const date = document.querySelector("#date").value
    const priority = document.querySelector("#task-priority").value
    return { title, desc, date, priority }
  }

  function focusOnTitle() {
    const title = document.getElementById("task-title")
    title.focus()
  }

  function hideTaskForm() {
    hideElement(taskForm)
    resetTaskForm()
  }

  function resetTaskForm() {
    showElement(newTaskButton)
    showElement(addTaskButton)
    showElement(hideTaskFormButton)
    hideElement(editTaskButton)
    taskForm.reset()
  }

  const hideElement = (elm) => {
    elm.style.display = "none"
  }

  const showElement = (elm) => {
    elm.style.display = "block"
  }

  return { taskFormController, showEditForm, checkTask, deleteTask, hideTaskForm }
}

const createTaskViewHelper = () => {
  const createTaskDiv = (task) => {
    const createTitleDiv = () => {
      const titleDiv = document.createElement("div")
      titleDiv.classList.add("titleDiv")
      titleDiv.textContent = task.title
      return titleDiv
    }
  
    const createDescDiv = () => {
      const descDiv = document.createElement("div")
      descDiv.classList.add("descDiv")
      descDiv.textContent = task.desc
      return descDiv
    }
  
    const createPriorityDiv = () => {
      const priorityDiv = document.createElement("div")
      priorityDiv.classList.add("priorityDiv")
      priorityDiv.textContent = task.priority
      return priorityDiv
    }
  
    const createDateDiv = () => {
      const dateDiv = document.createElement("div")
      dateDiv.classList.add("dateDiv")
      dateDiv.textContent = task.date
      return dateDiv
    }
  
    const createDeleteButton = () => {
      const deleteBtn = document.createElement("button")  
      deleteBtn.textContent = "Delete"
      deleteBtn.addEventListener("click", taskManipulator.deleteTask)
      return deleteBtn
    }
  
    const createCheckButton = () => {
      const checkBtn = document.createElement("input")   
      checkBtn.id = "checkbox"
      checkBtn.type = "checkbox"
      if (task.completed == false) {
        checkBtn.checked = false
      }
      else {
        checkBtn.checked = true
      }    
      checkBtn.addEventListener("click", taskManipulator.checkTask)
      return checkBtn
    }
  
    const createEditButton = () => {
      const editBtn = document.createElement("button") 
      editBtn.textContent = "Edit"
      editBtn.id = task.id
      editBtn.addEventListener("click", taskManipulator.showEditForm)
      return editBtn
    }

    const taskDiv = document.createElement("div")
    taskDiv.classList.add("taskDiv")
    taskDiv.id = task.id
    taskDiv.appendChild(createTitleDiv())
    taskDiv.appendChild(createDescDiv())
    taskDiv.appendChild(createPriorityDiv())
    taskDiv.appendChild(createDateDiv())
    taskDiv.appendChild(createDeleteButton())
    taskDiv.appendChild(createEditButton())
    taskDiv.appendChild(createCheckButton())
    return taskDiv
  }

  const setUpTaskContainer = (proj) => {
    const taskMainContainer = document.querySelector("#content-container")
    const taskContainer = document.querySelector("#content")
    taskMainContainer.className = proj.id
    taskContainer.className = proj.id
    taskContainer.textContent = ""
    return taskContainer
  }

  const createNewTaskView = (contProj) => {   
    const taskContainer = setUpTaskContainer(contProj)
    contProj.tasks.forEach((task) => {
      const taskDiv = createTaskDiv(task)    
      taskContainer.appendChild(taskDiv)  
    })
  } 

  return { createNewTaskView }
}

const taskManipulator = taskDOM()
const taskView = createTaskViewHelper()