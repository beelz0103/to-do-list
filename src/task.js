import { allProjects, project} from "./project.js"
export { task, taskManipulator, createTaskObj }

let taskId = 1

const task = (title, desc, date, priority) => {  
  const id = taskId.toString()
  let completed = false 
  taskId += 1
  return {title, desc, date, priority, id, completed};
}

const createTaskObj = () => {
  console.log("USED TASK MODULE")
  const taskValues = taskManipulator.getTaskValues()
  const title = taskValues.title
  const desc = taskValues.desc
  const date = taskValues.date
  const priority = taskValues.priority
  const newTask = task(title, desc, date, priority)
  addTaskObjToArray(newTask)
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
    return allProjects.filter(value => value.id == projectId)[0]
  }

  const setUpTaskContainer = (proj) => {
    const taskMainContainer = document.querySelector("#content-container")
    const taskContainer = document.querySelector("#content")
    taskMainContainer.className = proj.id
    taskContainer.className = proj.id
    taskContainer.textContent = ""
    return taskContainer
  }

  function createTask() {
    console.log("LMAO TASK WAS CREATED")
    createTaskObj()
    const currentProject = getProjectFromID()
    console.log(currentProject)
    createNewTaskView(currentProject) //uses project id to generare task view
  }

  const createNewTaskView = (contProj) => {   
    const taskContainer = setUpTaskContainer(contProj)
    contProj.tasks.forEach((task) => {
      const taskDivHelper = createTaskDivHelper(task)
      const taskDiv = taskDivHelper.createTaskDiv()    
      taskContainer.appendChild(taskDiv)  
    })
  } 

  return { getTaskValues, createNewTaskView, taskFormController }
}

const createTaskDivHelper = (task) => {
  const createTaskDiv = () => {
    const taskDiv = document.createElement("div")
    taskDiv.classList.add("taskDiv")
    taskDiv.id = task.id
    taskDiv.appendChild(createTitleDiv())
    taskDiv.appendChild(createDescDiv())
    taskDiv.appendChild(createPriorityDiv())
    taskDiv.appendChild(createDateDiv())
    taskDiv.appendChild(createDeleteButton())
    taskDiv.appendChild(createCheckButton())
    return taskDiv
  }

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
    deleteBtn.addEventListener("click", deleteTask)
    return deleteBtn
  }

  const createCheckButton = () => {
    const checkBtn = document.createElement("input")   
    checkBtn.id = "chekcBox"
    checkBtn.type = "checkbox"
    if (task.completed == false) {
      checkBtn.checked = false
    }
    else {
      checkBtn.checked = true
    }    
    checkBtn.addEventListener("click", checkTask)
    return checkBtn
  }

  function deleteTask(e) { 
    const taskId = e.target.parentNode.id
    deleteTaskObj(taskId)
    e.target.parentNode.remove();  
  }
  
  function checkTask(e) {
    const taskId = e.target.parentNode.id
    checkTaskObj(taskId)
    e.target.parentNode.classList.toggle("makeTaskGrayed")
  }

  return { createTaskDiv }
}

const taskManipulator = taskDOM()






