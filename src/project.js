import { compareAsc, format, isToday, isThisWeek, parseISO } from "date-fns";
import { deleteTaskObj } from "./task.js";

export {
  allProjects,
  createProjectObject,
  prjId,
  project,
  setPrjId,
  deleteProjectObj,
  makeTodayProject,
  makethisWeekProject,
};

let prjId = null;

function setPrjId(pid) {
  prjId = pid;
}

let allProjects = [];

const project = (title) => {
  const id = prjId.toString();
  const tasks = [];
  console.log("Project id", prjId, "was creat ed");
  prjId += 1;

  return { title, id, tasks };
};

const createProjectObject = (projectValues) => {
  const projecTitle = projectValues.title;
  const newProject = project(projecTitle);
  allProjects.push(newProject);
};

function deleteProjectObj(projId) {
  console.log(projId);
  const proj = getProjObjFromId(projId);
  console.log(proj);
  console.log(proj.title);
  proj.tasks.forEach((task) => deleteTaskObj(task.id));
  allProjects = allProjects.filter((proj) => proj.id !== projId);
}

const getProjObjFromId = (projId) =>
  allProjects.filter((project) => project.id === projId)[0];

// const inbox = project("Inbox")
// allProjects.push(inbox)

const makeTodayProject = () => {
  const todayObj = { title: "today", id: "TDAY", tasks: [] };
  console.log(allProjects[0]);
  console.log(todayObj);
  todayObj.tasks = allProjects[0].tasks.filter((task) => task.date !== "");
  todayObj.tasks = todayObj.tasks.filter((task) => isToday(task.date));
  return todayObj;
};

const makethisWeekProject = () => {
  const thisWeekObj = { title: "thisWeek", id: "TWEEK", tasks: [] };
  thisWeekObj.tasks = allProjects[0].tasks.filter((task) => task.date !== "");
  thisWeekObj.tasks = thisWeekObj.tasks.filter((task) => isThisWeek(task.date));
  return thisWeekObj;
};
