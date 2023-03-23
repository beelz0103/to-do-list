import { taskManipulator } from "./taskdom";
import {
  projectFormController,
  renderInbox,
  renderThisWeek,
  renderThisMonth,
  renderToday,
  renderSideBarProjectOnly,
} from "./projectdom";
import { allProjects, project, setPrjId } from "./project";
import { setTaskId } from "./task";
import { ISOtoLocal } from "./helper";

function initializeNew() {
  setPrjId(1);
  setTaskId(1);
  const inbox = project("Inbox");
  allProjects.push(inbox);
  renderTodo();
}

function initializeOld(projects) {
  projects.forEach((val) => allProjects.push(val));
  ISOtoLocal(projects[0].tasks);
  const prjId = parseInt(allProjects.at(-1).id) + 1;
  setPrjId(prjId);
  if (allProjects[0].tasks.at(-1) === undefined) {
    setTaskId(1);
  } else {
    const taskId = parseInt(allProjects[0].tasks.at(-1).id) + 1;
    setTaskId(taskId);
  }
  renderTodo();
}

function renderTodo() {
  projectFormController();
  renderSideBarProjectOnly();
  renderInbox();
  renderToday();
  renderThisWeek();
  renderThisMonth();
  taskManipulator.taskFormController();
}

function saveToDoList() {
  localStorage.clear();
  localStorage.setItem("projects", JSON.stringify(allProjects));
}

function loadToDoList() {
  const projects = JSON.parse(localStorage.getItem("projects"));
  if (projects === null) {
    initializeNew();
  } else {
    initializeOld(projects);
  }
}

export { saveToDoList, loadToDoList };
