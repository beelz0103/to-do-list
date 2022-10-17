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

const updateTaskObj = (task) => {
  const taskValues = taskManipulator.getTaskValues()
  console.log(taskValues)
  console.log(task)
  task.title = taskValues.title
  task.desc = taskValues.desc
  task.date = taskValues.date
  task.priority = taskValues.priority
}

const getTaskObjFromId = (taskId) => {
 return allProjects[0].tasks.filter(task => task.id == taskId).at(0)
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
  const editTaskButton = document.querySelector("#edit-Task")
  const hideTaskFormButton = document.querySelector("#closeTaskForm")

  function taskFormController() { //RENAME THIS TO projectFormController or something later 
    hideTaskForm()
    newTaskButton.addEventListener("click", showTaskForm)
    addTaskButton.addEventListener("click", addTask)
    editTaskButton.addEventListener("click", editTask)
    hideTaskFormButton.addEventListener("click", hideTaskForm)
  }
  
  function showTaskForm(e) {      
    taskForm.style.display = "block"
    hideButton(newTaskButton)
    hideButton(editTaskButton)
  }

  const showEditForm = (e) => {
    console.log("hi")
    taskForm.style.display = "block"
    const taskId = e.target.id   
    console.log("Edit task button id beofre", editTaskButton.id)
    editTaskButton.classList = ""
    editTaskButton.classList.add(taskId)
    console.log(editTaskButton.classList[0])
    console.log("Edit task button id ", editTaskButton.id)
    const task = getTaskObjFromId(taskId)
    updateEditFormValues(task)
    hideButton(newTaskButton)
    hideButton(addTaskButton)
    showButton(editTaskButton)

  }
  
  function hideTaskForm() {
    taskForm.style.display = "none"  
    showButton(newTaskButton)
    showButton(addTaskButton)
    taskForm.reset()
  }
  
  function addTask() {
    createTask()
    hideTaskForm()  
  }

  function editTask(e) {
    const taskId = editTaskButton.classList[0]
    const task = getTaskObjFromId(taskId)
    console.log(task)
    updateTaskObj(task)
    hideTaskForm()    
    const currentProject = getProjectFromID()
    createNewTaskView(currentProject) //uses project id to generare task view
  }

  const getTaskValues = () => { 
    const title = document.querySelector("#task-title").value
    const desc = document.querySelector("#task-desc").value
    const date = document.querySelector("#date").value
    const priority = document.querySelector("#task-priority").value
    return { title, desc, date, priority }
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

  const hideButton = (button) => {
    button.style.display = "none"
  }

  const showButton = (button) => {
    button.style.display = "block"
  }

  const hideFormOnClickOutside = () => {
    document.addEventListener("click", (e) => {
      console.log("Hi")
      if (taskForm.style.display === "block") {
        if (e.target != taskForm) {    
          console.log("Hi2")
          //hideTaskForm()
        } 
      }
    })
  }

  return { getTaskValues, createNewTaskView, taskFormController, hideFormOnClickOutside, showEditForm }
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
    taskDiv.appendChild(createEditButton())
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

  const createEditButton = () => {
    const editBtn = document.createElement("button") 
    editBtn.textContent = "Edit"
    editBtn.id = task.id
    editBtn.addEventListener("click", taskManipulator.showEditForm)
    return editBtn
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






