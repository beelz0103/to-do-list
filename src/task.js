import { compareAsc, format } from "date-fns";
import { allProjects } from "./project.js";
import { currentProjectId } from "./projectdom.js";

export {
  createTaskObj,
  updateTaskObj,
  getTaskObjFromId,
  deleteTaskObj,
  checkTaskObj,
  setTaskId,
  makeProjectArrayForToday,
};

let taskId = null;

function setTaskId(id) {
  taskId = id;
}

const task = (title, date, priority) => {
  const id = taskId.toString();
  const completed = false;
  taskId += 1;
  return { title, date, priority, id, completed };
};

const createTaskObj = (taskValues) => {
  const { title } = taskValues;
  const { date } = taskValues;
  const { priority } = taskValues;
  const newTask = task(title, date, priority);
  addTaskObjToArray(newTask);
};

const updateTaskObj = (task, taskValues) => {
  task.title = taskValues.title;
  task.date = taskValues.date;
  task.priority = taskValues.priority;
};

const getTaskObjFromId = (taskId) =>
  allProjects[0].tasks.filter((task) => task.id == taskId).at(0);

function deleteTaskObj(taskId) {
  allProjects.forEach((project) => {
    project.tasks = project.tasks.filter((task) => task.id != taskId);
  });
}

function checkTaskObj(taskId) {
  const task = allProjects[0].tasks.filter((task) => task.id == taskId).at(0);
  task.completed = !task.completed;
}

const addTaskObjToArray = (newTask) => {
  allProjects.forEach((value) => {
    if (value.id == "1" && value.title == "Inbox") {
      value.tasks.push(newTask);
    } else if (value.id === currentProjectId()) {
      value.tasks.push(newTask);
    }
  });
};

const makeProjectArrayForToday = () => {};
