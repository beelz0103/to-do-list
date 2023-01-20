import { isToday, isThisWeek } from "date-fns";
import { deleteTaskObj } from "./task";

let prjId = null;

function setPrjId(id) {
  prjId = id;
}

const allProjects = [];

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
  const proj = allProjects.find((prj) => prj.id === projId);
  proj.tasks.forEach((task) => deleteTaskObj(task.id));
  allProjects.splice(allProjects.indexOf(proj), 1);
}

const Today = () => {
  const todayObj = { title: "today", id: "TDAY", tasks: [] };
  todayObj.tasks = allProjects[0].tasks.filter((task) => task.date !== "");
  todayObj.tasks = todayObj.tasks.filter((task) => isToday(task.date));
  return todayObj;
};

const Week = () => {
  const thisWeekObj = { title: "thisWeek", id: "TWEEK", tasks: [] };
  thisWeekObj.tasks = allProjects[0].tasks.filter((task) => task.date !== "");
  thisWeekObj.tasks = thisWeekObj.tasks.filter((task) => isThisWeek(task.date));
  return thisWeekObj;
};

export {
  allProjects,
  project,
  setPrjId,
  deleteProjectObj,
  Today,
  Week,
  createProjectObject,
};
