//////// notes
/// 2. ADD 1WEEK CALENDARY ON SIDEBAR
//3 ADD DUE TODAY ON SIDEBARD
// OR 7. GRAY OUT TASKS WHEN CLICK ON COMPLETED TASKS
//change style


import { taskManipulator } from "./taskdom.js"
import { projectFormController, renderInbox, renderSideBarProjectOnly } from "./projectdom.js"
import { allProjects, project, setPrjId } from "./project.js";
import { setTaskId } from "./task.js"
import './style.css';

let taskId = 1
let prjId = 1

function saveToDoList(){
  localStorage.clear();
  localStorage.setItem(`projects`, JSON.stringify(allProjects));
}

function loadToDoList(){
  const projects = JSON.parse(localStorage.getItem(`projects`));

  if (projects == null) {
    setPrjId(prjId)
    setTaskId(taskId)
    const inbox = project("Inbox")
    allProjects.push(inbox)
    renderInbox()
    renderSideBarProjectOnly()
    projectFormController()
    taskManipulator.taskFormController()
  }

  else {
    projects.forEach(val => allProjects.push(val))
    prjId = parseInt(allProjects.at(-1).id) + 1
    setPrjId(prjId)    
    if (allProjects[0].tasks.at(-1) == undefined) {
      taskId = 1
      setTaskId(taskId)
    }
    else {
      taskId = parseInt(allProjects[0].tasks.at(-1).id) + 1
      setTaskId(taskId)
    }
    renderInbox()
    projectFormController()
    renderSideBarProjectOnly()
    taskManipulator.taskFormController()    
  }
}

window.addEventListener("beforeunload", () => {
  saveToDoList()
  return null;
})

loadToDoList();