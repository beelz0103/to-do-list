let taskId = 1
let prjId = 1
let editTaskId = null
let edProjId = null
const allProjects = []

const task = (title, desc, date, priority) => {  
  id = taskId.toString()
  taskId += 1
  let completed = false  
  return {title, desc, id, priority, completed, date};
}


const taskCreateForm = `    <label for="task-title">Title</label>
<input type="text" id="task-title" value = "Project Test" required>

<label for="task-desc">Desc</label>
<input type="text" id="task-desc" value = "Project Test" required>

<label for="date">dATE:</label>
<input type="date" id="date" name="birthday" value = "2001-12-12">

<button id="addTask">
    <span>Add Task</span>
    <i class="fa-solid fa-plus"></i>
</button>  `

const taskEditForm =  `    <label for="ed-task-title">Title</label>
<input type="text" id="ed-task-title" value = "Edit test title" required>

<label for="ed-date">dATE:</label>
<input type="date" id="ed-date" name="birthday" value = "1000-10-12">

<label for="ed-task-desc">Desc</label>
<input type="text" id="ed-task-desc" value = "Edit Test Content" required>

<button id="editTask">
    <span>Edit Task</span>
    <i class="fa-solid fa-plus"></i>
</button>  `



function deleteTask(e) { 
  allProjects.forEach((value) => {
    value.tasks = value.tasks.filter((val => val.id != e.target.parentNode.id));
  })
  e.target.parentNode.remove();  
}

function checkTask(e) {
  allProjects[0].tasks.forEach((v) => {
    if (v.id === e.target.parentNode.id) {
        v.completed = !v.completed
    }
  })
}

const project = (title) => {
  id = prjId.toString()
  tasks = []
  prjId += 1
  return {title, id, tasks}
}

const inbox = project("Inbox")
allProjects.push(inbox)

const project1 = project("project-1")
allProjects.push(project1)


function renderSideBar() {
  const projectContainer = document.querySelector("#project-container")
  projectContainer.textContent = ""
  allProjects.forEach((value) => {
    const div = document.createElement("div")    
    div.textContent = value.title
    div.id = value.id
    div.addEventListener("click", (e) => {
      allProjects.forEach((value) => {
        if (value.id === e.target.id) {
          createTaskView(value)
        }
      })      
    })
    projectContainer.appendChild(div)
  })
}

const createTaskObj = () => {
  const title = document.querySelector("#task-title").value
  const desc = document.querySelector("#task-desc").value
  const date = document.querySelector("#date").value
  const atProject = document.querySelector("#content").classList[0]  
  const tmpTask = task(title, desc, date, "high")
  allProjects[0].tasks.push(tmpTask) 
  allProjects.forEach((value) => {
    if (value.id === atProject && value.id != "1") {
      value.tasks.push(tmpTask)
    }
  })
}

function addTask() {
  document.querySelector("#addTask").addEventListener("click", () => {
    createTaskObj()
      pN = document.querySelector("#addTask").parentNode.classList[0];
      allProjects.forEach((value) => {
      if (value.id === pN) {
        createTaskView(value)
      }
    })  
  })
}



addTask()

// function addTask() {
//   console.log("BHAI")
// document.querySelector("#addTask").addEventListener("click", (e) => {
//   pN = document.querySelector("#addTask").parentNode.classList[1];
//   console.log("pN:", typeof(pN))
//   createTaskObj();
//   allProjects.forEach((value) => {
//     console.log(`value:`, value)
//     console.log('id', typeof(value.id))
//   if (value.id === pN) {
//     console.log("Id is same as atProject")  
//     createTaskView(value)
//   }
//   })  
// })
// }

function createTask() {
  
}


document.querySelector("#addProject").addEventListener("click", () => {
  const pr_title = document.querySelector("#pr-title").value
  tmpPrj = project(pr_title)
  allProjects.push(tmpPrj)
  renderSideBar()
  console.log(allProjects.at(-1))
  createTaskView(allProjects.at(-1))
})

function doEditStuff(e) {  
  const title = document.querySelector("#ed-task-title").value
  const desc = document.querySelector("#ed-task-desc").value  
  const date = document.querySelector("#ed-date").value
  allProjects[0].tasks.forEach((v) => {
    if (v.id === editTaskId) {
      v.title = title
      v.desc = desc
      v.date = date
    }
  })

  createTaskView(edProjId)
  document.querySelector("#editTask").disabled = true;
}



function showForm() {
  document.querySelector(".modal-form").classList.add("show-modal");
}

const createTaskView = (contProj) => {  
  
  const taskcontainer = document.querySelector("#content")
  taskcontainer.className = ""
  taskcontainer.classList.add(contProj.id)
  taskcontainer.innerHTML = taskCreateForm
  taskcontainer.innerHTML += taskEditForm
  console.log(contProj.tasks)
  contProj.tasks.forEach((value) => {
    const taskdiv = document.createElement("div")
    taskdiv.classList.add("taskdiv")
    taskdiv.id = value.id
    const title = document.createElement("div")
    title.textContent = value.title
    const desc = document.createElement("div")
    desc.textContent = value.desc
    const date = document.createElement("div")
    date.textContent = value.date
    taskdiv.appendChild(title)
    taskdiv.appendChild(desc)
    taskdiv.appendChild(date)


    const delete_btn = document.createElement("button")  
    delete_btn.textContent = "Dlt"
    delete_btn.addEventListener("click", deleteTask)
    taskdiv.appendChild(delete_btn)  
   
    const taskCheck = document.createElement("input")    
    taskCheck.id = "checked"
    taskCheck.type = "checkbox"
    if (value.completed == false) {
      taskCheck.checked = false
    }
    else {
      taskCheck.checked = true
    }    
    taskCheck.addEventListener("click", checkTask)
    taskdiv.appendChild(taskCheck)  


    const taskEdit = document.createElement("button")
    taskEdit.id = "task-edit"
    taskEdit.textContent = "edit"
    taskEdit.addEventListener("click", (e) => {
      document.querySelector("#editTask").disabled = false;
      editTaskId = e.target.parentNode.id
      console.log(`We will edit tasks with this id ${editTaskId}`)
      allProjects.forEach((val) => {
        if (val.id == e.target.parentNode.parentNode.classList[0]) {
          console.log(val)
          edProjId = val
        }
      })
      console.log(edProjId)
      document.querySelector("#editTask").addEventListener("click", doEditStuff)
    })
    taskdiv.appendChild(taskEdit)

    taskcontainer.appendChild(taskdiv)  
  })
  addTask()
  document.querySelector("#editTask").disabled = true;
}

document.querySelector("#book_closebutton").addEventListener("click", hideForm);

function hideForm() {
  document.querySelector(".modal-form").classList.remove("show-modal");
}

renderSideBar()
createTaskView(allProjects[0])

// document.querySelector("#inbox").addEventListener("click", showInbox)
// //document.querySelector("#project-1").addEventListener("click", showProjectOne)

// function showInbox() {
//   createTaskView(inbox.tasks, inbox.id)
// }

// function showProjectOne() {
//   createTaskView(projects[1], "1")
// }




//projects = {0: inbox_tasks, 1: projectOne_tasks}
//console.log(projects[0])





// const pr_tasks = project("Tasks")
// const sidebar = document.querySelector("#sidebar")
// const project1 = document.createElement("div")
// project1.textContent = pr_tasks.pr_title
// sidebar.appendChild(project1)


//class Book {
//   constructor(title, author, pages, read) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read
//     this.identifier = null
//   }
// }

// 
// document.querySelector("#book_closebutton").addEventListener("click", hideForm);
// document.querySelector("#book_createbook").addEventListener("click", createBook)



// function hideForm() {
//   document.querySelector(".modal-form").classList.remove("show-modal");
// }




// function currentBook() {
//   return myLibrary.at(-1)
// } 

// function createBook() {  
//   const booktitle = document.querySelector("#book_title")
//   const bookauthor = document.querySelector("#book_author")
//   const bookpages = document.querySelector("#book_pages")
//   const bookread = document.querySelector("#book_read")
//   if (checkvalidity(booktitle, bookauthor, bookpages)) { 
//     myLibrary.push(new Book(booktitle.value, bookauthor.value, bookpages.value, bookread.checked))       
//     currentBook().identifier = book_id.toString()
//     book_id += 1  
//     buildCard(currentBook())
//     hideForm() 
//     document.querySelector("form").reset()  
//   }
// }

// function checkvalidity (title, author, read) {
//   if (title.value == "") title.reportValidity()
//   else if (author.value == "") author.reportValidity()
//   else if (read.value == "") read.reportValidity()
//   else return true
// }

// function buildCard(value) {
//   const card_container = document.querySelector("div#cardcontainer")
//   const card_div = document.createElement("div")
//   card_div.id = value.identifier

//   const title_div = document.createElement('div')
//   title_div.textContent = `Title: ${value.title}`
//   card_div.appendChild(title_div)

document.querySelector("#editTask").disabled = true;

//   const auth_div = document.createElement('div')
//   auth_div.textContent = `Author: ${value.author}`
//   card_div.appendChild(auth_div)

//   const page_div = document.createElement('div')
//   page_div.textContent = `Pages: ${value.pages}`
//   card_div.appendChild(page_div)

//   const read_btn = document.createElement("button")
  
//   if (value.read ) {
//     read_btn.textContent = "Read"
//     read_btn.style.backgroundColor = "green"
//   }
//   else {
//     read_btn.textContent = "Not Read"
//     read_btn.style.backgroundColor = "red"
//   }

//   read_btn.addEventListener("click", changeReadStatus)
//   card_div.appendChild(read_btn)  

//   const delete_btn = document.createElement("button")  
//   delete_btn.textContent = "Delete"
//   delete_btn.addEventListener("click", deleteBook)
//   card_div.appendChild(delete_btn)  

//   card_container.appendChild(card_div)
// }


// function deleteBook(e) {  
//   myLibrary = myLibrary.filter(book => book.identifier != e.target.parentNode.id)
//   e.target.parentNode.remove();    
// }

// function changeReadStatus(e) { 
//   let book = myLibrary.find(element => element.identifier === e.target.parentNode.id);  
//   if (book.read) {
//     book.read = false
//     e.target.textContent = "Not Read"
//     e.target.style.backgroundColor = "red"
//   }
//   else {
//     book.read = true
//     e.target.textContent = "Read"
//     e.target.style.backgroundColor = "green"
//   }   
// }

// function saveLibrary(){
//   localStorage.clear();
//   localStorage.setItem(`libr`, JSON.stringify(myLibrary));
// }

// function loadLibrary(){
//   newLib = JSON.parse(localStorage.getItem(`libr`));
//   if (newLib == null) {
//     return
//   }
//   else {
//     if (newLib.length != 0) {
//       book_id = parseInt(newLib.at(-1).identifier) + 1
//     }

//     newLib.forEach((bookObj) => {
//       myLibrary.push(new Book(bookObj.title, bookObj.author, bookObj.pages, bookObj.read));
//       currentBook().identifier = bookObj.identifier
//       buildCard(currentBook())
//     })
//   }
// }

// window.addEventListener("beforeunload", () => {
//   saveLibrary()
//   return null;
// })

// loadLibrary();







//////// notes
////// 1. ADD PRIORITY CHECKBOX FOR TASKS
/// 2. ADD 1WEEK CALENDARY ON SIDEBAR
//3 ADD DUE TODAY ON SIDEBARD
///4. OPTIONAL MAYBE SORT ITMES BY DATE
///5. ACTUALLY REAFACTOR YOUR CODE LMAO
///6. MAYBE SEGREGATE TASKS FROM INBOX AND PROJECTS
///7. ADD A COMPLETED TASK SIDEBARD WHERE ALL TASKS ARE SHOWN IN ORDER OF COMPLETTION, COMPLETED TASKS CANT BE UNCOMPLETED
//8. ADD MODAL TO ADD TASKS AND PROJECTS, also to EDIT TASKS AND PROJECTS