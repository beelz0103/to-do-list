// Style Notes for future
// Make responsive

// Feature notes
// Add sidebar hamburger

import { parseISO } from "date-fns";
import { taskManipulator } from "./taskdom";
import {
  projectFormController,
  renderInbox,
  renderThisWeek,
  renderToday,
  renderSideBarProjectOnly,
} from "./projectdom";
import { allProjects, project, setPrjId } from "./project";
import { setTaskId } from "./task";
import "./style.css";

let taskId = 1;
let prjId = 1;

function ISOtoLocal(taskArr) {
  taskArr.forEach((task) => {
    if (task.date !== "") task.date = parseISO(task.date);
  });
}

function saveToDoList() {
  localStorage.clear();
  localStorage.setItem("projects", JSON.stringify(allProjects));
}

function loadToDoList() {
  const projects = JSON.parse(localStorage.getItem("projects"));

  if (projects === null) {
    setPrjId(prjId);
    setTaskId(taskId);
    const inbox = project("Inbox");
    allProjects.push(inbox);
    renderInbox();
    renderToday();
    renderThisWeek();
    renderSideBarProjectOnly();
    projectFormController();
    taskManipulator.taskFormController();
  } else {
    projects.forEach((val) => allProjects.push(val));
    ISOtoLocal(projects[0].tasks);
    prjId = parseInt(allProjects.at(-1).id) + 1;
    setPrjId(prjId);
    if (allProjects[0].tasks.at(-1) === undefined) {
      taskId = 1;
      setTaskId(taskId);
    } else {
      taskId = parseInt(allProjects[0].tasks.at(-1).id) + 1;
      setTaskId(taskId);
    }

    projectFormController();
    renderSideBarProjectOnly();
    renderInbox();
    renderToday();
    renderThisWeek();
    taskManipulator.taskFormController();
  }
}

window.addEventListener("beforeunload", () => {
  saveToDoList();
  return null;
});

loadToDoList();
