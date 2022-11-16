import {
  createTaskObj,
  updateTaskObj,
  getTaskObjFromId,
  deleteTaskObj,
  checkTaskObj,
} from "./task.js";
import { currentProject, hideProjectForm } from "./projectdom.js";

export { taskManipulator, taskView };

const taskDOM = () => {
  const taskFormContainer = document.querySelector("#taskFormContainer");
  const taskForm = document.querySelector("#taskForm");
  const newTaskButton = document.querySelector("#addNewTask");
  const addTaskButton = document.querySelector("#add-Task");
  const editTaskButton = document.querySelector("#edit-Task");
  const hideTaskFormButton = document.querySelector("#closeTaskForm");

  function taskFormController() {
    // RENAME THIS TO projectFormController or something later
    hideTaskForm();
    newTaskButton.addEventListener("click", showTaskForm);
    addTaskButton.addEventListener("click", addTask);
    editTaskButton.addEventListener("click", editTask);
    hideTaskFormButton.addEventListener("click", hideTaskForm);
  }

  // create

  function showTaskForm() {
    hideProjectForm();

    showElement(taskForm);

    resetTaskForm();
    focusOnTitle();

    hideElement(newTaskButton);
  }

  function addTask(e) {
    if (submitFunction(e)) {
      createTask();
      hideTaskForm();
    }
  }

  function createTask() {
    const taskValues = getTaskValues();
    createTaskObj(taskValues);
    taskView.createNewTaskView(currentProject());
  }

  // remove
  function deleteTask(e) {
    const taskId = e.target.parentNode.id;
    deleteTaskObj(taskId);
    taskManipulator.hideTaskForm();
    hideProjectForm();
    e.target.parentNode.remove();
  }

  // update

  function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  function removeClassFromELemernt() {
    const allElemets = document.querySelectorAll(".taskDiv");
    if (allElemets.length !== 0) {
      allElemets.forEach((value) => {
        value.classList.remove("hideElement");
      });
    }
  }

  const moveEditFormToBelowElement = (currentNode) => {
    insertAfter(taskForm, currentNode);
  };

  const showEditForm = (e) => {
    resetTaskForm();

    hideProjectForm();
    const taskId = e.target.id;
    console.log(typeof taskId);
    const elementthis = e.target.parentNode;
    console.log(elementthis);
    moveEditFormToBelowElement(elementthis);
    elementthis.classList.add("hideElement");
    showElement(taskForm);
    focusOnTitle();
    setUpEditForm(taskId);
  };

  function setUpEditForm(id) {
    editTaskButton.className = id;
    const task = getTaskObjFromId(id);
    updateEditFormValues(task);
    hideElement(addTaskButton);
    showElement(editTaskButton);
  }

  const updateEditFormValues = (task) => {
    const title = document.querySelector("#task-title");
    title.value = task.title;
    const date = document.querySelector("#date");
    date.value = task.date;
    const priority = document.querySelector("#task-priority");
    priority.value = task.priority;
  };

  function editTask(e) {
    if (submitFunction(e)) {
      const taskId = editTaskButton.className;
      const task = getTaskObjFromId(taskId);
      const taskValues = getTaskValues();
      updateTaskObj(task, taskValues);
      hideTaskForm();
      taskView.createNewTaskView(currentProject());
    }
  }

  function checkTask(e) {
    const taskId = e.target.parentNode.id;
    checkTaskObj(taskId);
    taskManipulator.hideTaskForm();
    hideProjectForm();

    e.target.nextSibling.classList.toggle("titleDivChecked");
  }

  // utility functions
  const getTaskValues = () => {
    const title = document.querySelector("#task-title").value;
    const date = document.querySelector("#date").value;
    const priority = document.querySelector("#task-priority").value;
    return { title, date, priority };
  };

  function focusOnTitle() {
    const title = document.getElementById("task-title");
    title.focus(); // sets focus to element
    const val = title.value; // store the value of the element
    title.value = ""; // clear the value of the element
    title.value = val; // set that value back.
  }

  function hideTaskForm() {
    hideElement(taskForm);
    resetTaskForm();
  }

  function resetTaskForm() {
    removeClassFromELemernt();
    taskFormContainer.appendChild(taskForm);
    showElement(newTaskButton);
    showElement(addTaskButton);
    showElement(hideTaskFormButton);
    hideElement(editTaskButton);
    taskForm.reset();
  }

  const hideElement = (elm) => {
    elm.style.display = "none";
    console.log(elm, "hidden");
  };

  const showElement = (elm) => {
    elm.style.display = "block";
  };

  return {
    taskFormController,
    showEditForm,
    checkTask,
    deleteTask,
    hideTaskForm,
    resetTaskForm,
  };
};

const createTaskViewHelper = () => {
  const createTaskDiv = (task) => {
    const createTitleDiv = () => {
      const titleDiv = document.createElement("div");
      titleDiv.classList.add("titleDiv");
      titleDiv.textContent = task.title;
      if (task.completed == false) {
        titleDiv.classList.remove("titleDivChecked");
      } else {
        titleDiv.classList.add("titleDivChecked");
      }
      return titleDiv;
    };

    const createPriorityDiv = () => {
      const priorityDiv = document.createElement("div");
      priorityDiv.classList.add("priorityDiv");
      priorityDiv.classList.add(task.priority);
      return priorityDiv;
    };

    const createDateDiv = () => {
      const dateDiv = document.createElement("div");
      dateDiv.classList.add("dateDiv");
      dateDiv.textContent = task.date;
      return dateDiv;
    };

    const createDeleteButton = () => {
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("deleteButtonForTask");
      const deleteFont = createFontAwesomeIcon("fa-solid", "fa-trash");
      deleteBtn.appendChild(deleteFont);
      deleteBtn.addEventListener("click", taskManipulator.deleteTask);
      return deleteBtn;
    };

    const createCheckButton = () => {
      const checkBtn = document.createElement("input");
      checkBtn.classList.add("checkbox");
      checkBtn.type = "checkbox";
      if (task.completed == false) {
        checkBtn.checked = false;
      } else {
        checkBtn.checked = true;
      }
      checkBtn.addEventListener("click", taskManipulator.checkTask);
      return checkBtn;
    };

    const createEditButton = () => {
      const editBtn = document.createElement("button");
      const editFont = createFontAwesomeIcon("fa-solid", "fa-edit");
      editBtn.classList.add("editButtonForTask");
      editBtn.appendChild(editFont);
      editBtn.id = task.id;
      editBtn.addEventListener("click", taskManipulator.showEditForm);
      return editBtn;
    };

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskDiv");
    taskDiv.id = task.id;
    taskDiv.appendChild(createPriorityDiv());
    taskDiv.appendChild(createCheckButton());
    taskDiv.appendChild(createTitleDiv());
    taskDiv.appendChild(createDateDiv());
    taskDiv.appendChild(createEditButton());
    taskDiv.appendChild(createDeleteButton());

    return taskDiv;
  };

  const setUpTaskContainer = (proj) => {
    const taskMainContainer = document.querySelector("#content-container");
    const taskContainer = document.querySelector("#content");
    taskMainContainer.className = proj.id;
    taskContainer.className = proj.id;
    taskContainer.textContent = "";
    return taskContainer;
  };

  const createNewTaskView = (contProj) => {
    const containetitle = document.querySelector(".content-container-title");
    containetitle.textContent = contProj.title;
    console.log("new task view");
    taskManipulator.hideTaskForm();
    const taskContainer = setUpTaskContainer(contProj);
    contProj.tasks.forEach((task) => {
      const taskDiv = createTaskDiv(task);
      taskContainer.appendChild(taskDiv);
    });
  };

  return { createNewTaskView };
};

const taskManipulator = taskDOM();
const taskView = createTaskViewHelper();

function submitFunction(event) {
  event.preventDefault();
  const title = document.querySelector("#task-title");

  const titleTrue = submitFunctionTitle();

  if (!titleTrue) {
    title.focus();
  } else {
    return true;
  }
}

function submitFunctionTitle() {
  const title = document.querySelector("#task-title");
  const titleErr = document.querySelector("#titleerrdiv");
  if (title.validity.valueMissing) {
    titleErr.textContent = "Cant be empty";
  } else if (title.value.length > 15) {
    titleErr.textContent = "Email should be only 15 characters";
  } else {
    titleErr.textContent = "";
    return true;
  }
}

function createFontAwesomeIcon(classOne, classTwo) {
  const italic = document.createElement("I");
  italic.classList.add(classOne, classTwo);
  return italic;
}
