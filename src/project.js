import { isToday, isThisWeek } from "date-fns";
import { deleteTaskObj } from "./task.js";

let prjId = null;

function setPrjId(pid) {
  prjId = pid;
}

let allProjects = [];

const project = (title) => {
  const id = prjId.toString();
  const tasks = [];
  prjId += 1;
  return { title, id, tasks };
};

const createProjectObject = (projectValues) => {
  const projecTitle = projectValues.title;
  const newProject = project(projecTitle);
  allProjects.push(newProject);
};

function deleteProjectObj(projId) {
  const proj = getProjObjFromId(projId);
  proj.tasks.forEach((task) => deleteTaskObj(task.id));
  allProjects = allProjects.filter((proj) => proj.id !== projId);
}

const getProjObjFromId = (projId) =>
  allProjects.filter((project) => project.id === projId)[0];

const makeTodayProject = () => {
  const todayObj = { title: "today", id: "TDAY", tasks: [] };
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

export {
  allProjects,
  prjId,
  project,
  setPrjId,
  deleteProjectObj,
  makeTodayProject,
  makethisWeekProject,
  createProjectObject,
};
