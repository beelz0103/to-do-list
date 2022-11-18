import {
  allProjects,
  createProjectObject,
  project,
  deleteProjectObj,
  makeTodayProject,
  makethisWeekProject,
} from "./project.js";

import { taskManipulator, taskView } from "./taskdom.js";

export {
  currentProjectId,
  currentProject,
  projectFormController,
  renderInbox,
  renderToday,
  hideProjectForm,
  renderSideBarProjectOnly,
  renderThisWeek,
};

const projectForm = document.querySelector("#projForm");
const newProjectButton = document.querySelector("#addNewProject");
const addProjectButton = document.querySelector("#addProject");
const hideProjectFormButton = document.querySelector("#closeProjForm");
const titleInput = document.querySelector("#pr-title");
const errDiv = document.querySelector(".projecterror");

function projectFormController() {
  // RENAME THIS TO projectFormController or something later
  hideProjectForm();
  newProjectButton.addEventListener("click", showProjectForm);
  addProjectButton.addEventListener("click", addProject);
  hideProjectFormButton.addEventListener("click", hideProjectForm);
}

function showProjectForm() {
  projectForm.style.display = "block";
  newProjectButton.style.display = "none";
  taskManipulator.hideTaskForm();
}

function hideProjectForm() {
  projectForm.style.display = "none";
  newProjectButton.style.display = "block";
  errDiv.textContent = "";
  projectForm.reset();
}

function addProject(e) {
  if (submitFunction(e, titleInput, errDiv)) {
    createProject();
    hideProjectForm();
  }
}

const getProjectValues = () => {
  const title = document.querySelector("#pr-title").value;
  return { title };
};

function createProject() {
  const projectValues = getProjectValues();
  createProjectObject(projectValues);
  renderSideBarProjectOnly();
  taskView.createNewTaskView(allProjects.at(-1));
}

const renderInbox = () => {
  const inbx = document.querySelector("#sidebar div");
  inbx.id = "1";
  inbx.addEventListener("click", () => {
    addClassToOneDiv(inbx);
    hideProjectForm();
    taskView.createNewTaskView(allProjects[0]);
  });
  addClassToOneDiv(inbx);
  taskView.createNewTaskView(allProjects[0]);
};

const renderToday = () => {
  const today = document.querySelector("#today");
  today.addEventListener("click", () => {
    hideProjectForm();
    console.log("TODAY WAS RENDERERD");
    const todayPrj = makeTodayProject();
    taskView.createNewTaskView(todayPrj);
    addClassToOneDiv(today);
  });
};

const renderThisWeek = () => {
  const thisWeek = document.querySelector("#thisWeek");

  thisWeek.addEventListener("click", () => {
    hideProjectForm();
    console.log("THIS WEEK WAS RENDERERD");
    const thisWeekPrj = makethisWeekProject();
    taskView.createNewTaskView(thisWeekPrj);
    addClassToOneDiv(thisWeek);
  });
};

function renderSideBarProjectOnly() {
  const projectContainer = document.querySelector("#project-container");
  projectContainer.textContent = "";
  allProjects.forEach((projectObject) => {
    if (projectObject.id != "1") {
      const projectDiv = createProjectDiv(projectObject);
      projectContainer.appendChild(projectDiv);
    }
  });
}

function createProjectDiv(prj) {
  // helps renderSideBarProjectOnly() function
  const div = document.createElement("div");
  const deleteBtn = createDeleteButton();
  const fontAwesome = createFontAwesomeIcon("fa-solid", "fa-list-check");
  const textContentSpan = createTextContentSpan(prj.title);
  div.appendChild(fontAwesome);
  div.appendChild(textContentSpan);
  div.appendChild(deleteBtn);
  div.classList.add("projectItem");
  div.id = prj.id;
  div.addEventListener("click", () => {
    hideProjectForm();
    addClassToOneDiv(div);
    taskView.createNewTaskView(prj);
  });
  addClassToOneDiv(div);
  return div;
}

const currentProjectId = () => document.querySelector("#content").classList[0];

const currentProject = () => {
  const projectId = currentProjectId();
  console.log("PROJECT ID WAS GOTTTT");
  console.log("projectid", projectId);
  if (projectId === "TDAY") {
    const projecttoreturn = makeTodayProject();
    return projecttoreturn;
  }
  if (projectId === "TWEEK") {
    const projecttoreturn = makethisWeekProject();
    return projecttoreturn;
  }
  return allProjects.filter((value) => value.id == projectId)[0];
};

function createFontAwesomeIcon(classOne, classTwo) {
  const italic = document.createElement("I");
  italic.classList.add(classOne, classTwo);
  return italic;
}

function createTextContentSpan(text) {
  const span = document.createElement("span");
  span.textContent = ` ${text}`;
  return span;
}

function deleteProject(e) {
  const inbx = document.querySelector("#sidebar div");
  e.stopPropagation();
  const projId = e.target.parentNode.id;
  deleteProjectObj(projId);

  hideProjectForm();
  e.target.parentNode.remove();
  addClassToOneDiv(inbx);
  taskView.createNewTaskView(allProjects[0]);
}

const createDeleteButton = () => {
  const deleteBtn = document.createElement("button");
  const deleteIcon = createFontAwesomeIcon("fa-solid", "fa-trash");
  deleteBtn.appendChild(deleteIcon);
  deleteBtn.classList.add("deleteButton");
  deleteBtn.addEventListener("click", deleteProject);
  return deleteBtn;
};

function addClassToOneDiv(oneDiv) {
  const inbx = document.querySelector("#sidebar div");
  const today = document.querySelector("#today");
  const thisWeek = document.querySelector("#thisWeek");
  const projectsItems = document.querySelectorAll("#project-container div");

  inbx.classList.remove("higlight");
  today.classList.remove("higlight");
  thisWeek.classList.remove("higlight");
  projectsItems.forEach((value) => value.classList.remove("higlight"));
  oneDiv.classList.add("higlight");
}

function submitFunction(event, element, div) {
  if (element.validity.valueMissing) {
    div.textContent = "Cant be empty";
    element.focus();
    event.preventDefault();
  } else if (element.value.length > 15) {
    div.textContent = "Email should be only 15 characters";
    element.focus();
    event.preventDefault();
  } else {
    div.textContent = "";
    event.preventDefault();
    return true;
  }
}

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
