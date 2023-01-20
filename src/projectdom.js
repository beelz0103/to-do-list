import {
  allProjects,
  createProjectObject,
  deleteProjectObj,
  Today,
  Week,
} from "./project";

import { taskManipulator, taskView } from "./taskdom";

const projectForm = document.querySelector("#projForm");
const newProjectButton = document.querySelector("#addNewProject");
const addProjectButton = document.querySelector("#addProject");
const hideProjectFormButton = document.querySelector("#closeProjForm");
const titleInput = document.querySelector("#pr-title");
const errDiv = document.querySelector(".projecterror");

function titleValid() {
  if (titleInput.validity.valueMissing) {
    addProjectButton.disabled = true;
  } else if (titleInput.value.length > 15) {
    addProjectButton.disabled = true;
  } else {
    addProjectButton.disabled = false;
  }
}

titleInput.addEventListener("input", titleValid);

function projectFormController() {
  hideProjectForm();
  newProjectButton.addEventListener("click", showProjectForm);
  addProjectButton.addEventListener("click", addProject);
  hideProjectFormButton.addEventListener("click", hideProjectForm);
}

function showProjectForm() {
  projectForm.style.display = "block";
  newProjectButton.style.display = "none";
  document.querySelector("#pr-title").focus();
  taskManipulator.hideTaskForm();
}

function hideProjectForm() {
  projectForm.style.display = "none";
  newProjectButton.style.display = "block";
  errDiv.textContent = "";
  projectForm.reset();
}

function addProject(e) {
  e.preventDefault();
  createProject();
  hideProjectForm();
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
    higlightProjectDiv(inbx);
    hideProjectForm();
    taskView.createNewTaskView(allProjects[0]);
  });
  higlightProjectDiv(inbx);
  taskView.createNewTaskView(allProjects[0]);
};

const renderToday = () => {
  const today = document.querySelector("#today");
  today.addEventListener("click", () => {
    hideProjectForm();
    const todayPrj = Today();
    taskView.createNewTaskView(todayPrj);
    higlightProjectDiv(today);
  });
};

const renderThisWeek = () => {
  const thisWeek = document.querySelector("#thisWeek");
  thisWeek.addEventListener("click", () => {
    hideProjectForm();
    const thisWeekPrj = Week();
    taskView.createNewTaskView(thisWeekPrj);
    higlightProjectDiv(thisWeek);
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
    higlightProjectDiv(div);
    taskView.createNewTaskView(prj);
  });
  higlightProjectDiv(div);
  return div;
}

const currentProjectId = () => document.querySelector("#content").classList[0];

const currentProject = () => {
  const projectId = currentProjectId();
  if (projectId === "TDAY") {
    const projecttoreturn = Today();
    return projecttoreturn;
  }
  if (projectId === "TWEEK") {
    const projecttoreturn = Week();
    return projecttoreturn;
  }
  return allProjects.filter((value) => value.id === projectId)[0];
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
  higlightProjectDiv(inbx);
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

function clearAllProjectDivHighlight() {
  const inbx = document.querySelector("#sidebar div");
  const today = document.querySelector("#today");
  const thisWeek = document.querySelector("#thisWeek");
  const projectsItems = document.querySelectorAll("#project-container div");
  inbx.classList.remove("higlight");
  today.classList.remove("higlight");
  thisWeek.classList.remove("higlight");
  projectsItems.forEach((value) => value.classList.remove("higlight"));
}

function higlightProjectDiv(projectDiv) {
  clearAllProjectDivHighlight();
  projectDiv.classList.add("higlight");
}

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
