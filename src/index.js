//////// notes
////// 1. ADD PRIORITY CHECKBOX FOR TASKS
/// 2. ADD 1WEEK CALENDARY ON SIDEBAR
//3 ADD DUE TODAY ON SIDEBARD
///4. OPTIONAL MAYBE SORT ITMES BY DATE
///5. ACTUALLY REAFACTOR YOUR CODE LMAO
///6. MAYBE SEGREGATE TASKS FROM INBOX AND PROJECTS
///7. ADD A COMPLETED TASK SIDEBARD WHERE ALL TASKS ARE SHOWN IN ORDER OF COMPLETTION, 
//COMPLETED TASKS CANT BE UNCOMPLETED
// OR 7. GRAY OUT TASKS WHEN CLICK ON COMPLETED TASKS
//8. ADD MODAL TO ADD TASKS AND PROJECTS, also to EDIT TASKS AND PROJECTS

// import { taskCreateForm, createDiv, projectFormController, getProjectTitle } from "./domstuff.js"
import { allProjects, projectManipulator } from "./project.js"
import { taskManipulator, createTaskObj } from "./task.js"
import './style.css';

projectManipulator.renderInbox()
projectManipulator.projectFormController()
taskManipulator.taskFormController()
taskManipulator.hideFormOnClickOutside()