import {
  allProjects,
  createProjectObject,
  project,
  deleteProjectObj,
} from "./project.js";

import { taskManipulator, taskView } from "./taskdom.js";

export {
  currentProjectId,
  currentProject,
  projectFormController,
  renderInbox,
  hideProjectForm,
  renderSideBarProjectOnly,
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
}

function hideProjectForm() {
  projectForm.style.display = "none";
  newProjectButton.style.display = "block";
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
    taskView.createNewTaskView(allProjects[0]);
  });
  addClassToOneDiv(inbx);
  taskView.createNewTaskView(allProjects[0]);
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
    addClassToOneDiv(div);
    taskView.createNewTaskView(prj);
  });
  addClassToOneDiv(div);
  return div;
}

const currentProjectId = () => document.querySelector("#content").classList[0];

const currentProject = () => {
  const projectId = currentProjectId();
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
  console.log(e.target);
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
  console.log(inbx);
  const projectsItems = document.querySelectorAll("#project-container div");
  console.log(projectsItems);
  inbx.classList.remove("higlight");
  projectsItems.forEach((value) => value.classList.remove("higlight"));
  console.log(oneDiv);
  console.log(inbx);
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
