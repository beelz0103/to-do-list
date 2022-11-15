import { deleteTaskObj } from "./task.js";

export {
  allProjects,
  createProjectObject,
  prjId,
  project,
  setPrjId,
  deleteProjectObj,
};

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
