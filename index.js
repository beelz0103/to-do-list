tasks = []
pr_counter = 2
task_counter = 7

const task = (title, desc, id) => {
  return {title, desc, id};
};

const project = (pr_title, pr_id) => {
  return {pr_title, pr_id}
}

const createTaskObj = () => {
  const title = document.querySelector("#task-title").value
  const desc = document.querySelector("#task-desc").value
  tasks.push(task(title, desc, Date.now()))  
}


function addTask() {
  console.log("BHAI")
document.querySelector("#addTask").addEventListener("click", (e) => {
  pN = document.querySelector("#addTask").parentNode;
  createTaskObj();
  projects[parseInt(pN.classList[1])].push(tasks.at(-1))
  createTaskView(projects[parseInt(pN.classList[1])], `${parseInt(pN.classList[1])}`)
})
}

function createTask() {

}

addTask()

document.querySelector("#addProject").addEventListener("click", () => {

  projects[pr_counter] = [task(`Task ${task_counter}`, `This is task ${task_counter}`, task_counter), 
  task(`Task ${task_counter+1}`, `This is task ${task_counter}`, task_counter + 1), 
  task(`Task ${task_counter+2}`, `This is task ${task_counter+2}`, task_counter+2)]


  new_pr = document.createElement("div")  
  new_pr.id = `project-${pr_counter}`
  new_pr.textContent = document.querySelector("#pr-title").value;
  new_pr.style = "background-color: lightcoral;"
  const a = pr_counter
  new_pr.addEventListener("click", () => {
    createTaskView(projects[a], `${a}`)
  }) 

  document.querySelector("#sidebar div").appendChild(new_pr)

  pr_counter = pr_counter+1
  task_counter += 3
})

function showForm() {
  document.querySelector(".modal-form").classList.add("show-modal");
}

const createTaskView = (taskArr, contProj) => {  
  const taskcontainer = document.querySelector("#content")
  taskcontainer.className = ""
  taskcontainer.classList.add("inbox")
  taskcontainer.classList.add(contProj)
  taskcontainer.innerHTML = `    <label for="task-title">Title</label>
  <input type="text" id="task-title" value = "Project Test" required>

  <label for="task-desc">Desc</label>
  <input type="text" id="task-desc" value = "Project Test" required>

  <button id="addTask">
      <span>Add Task</span>
      <i class="fa-solid fa-plus"></i>
  </button>  `
  taskArr.forEach((value) => {
    const taskdiv = document.createElement("div")
    taskdiv.classList.add("taskdiv")
    const title = document.createElement("div")
    title.textContent = value.title
    const desc = document.createElement("div")
    desc.textContent = value.desc
    taskdiv.appendChild(title)
    taskdiv.appendChild(desc)
    taskcontainer.appendChild(taskdiv)  
  })
  addTask()
}

document.querySelector("#create-task").addEventListener("click", () => {
  createTaskObj()
  createTaskView(tasks.at(-1))
})


document.querySelector("#book_closebutton").addEventListener("click", hideForm);

function hideForm() {
  document.querySelector(".modal-form").classList.remove("show-modal");
}




document.querySelector("#inbox").addEventListener("click", showInbox)
document.querySelector("#project-1").addEventListener("click", showProjectOne)

function showInbox() {
  createTaskView(projects[0], "0")
}

function showProjectOne() {
  createTaskView(projects[1], "1")
}

console.log(tasks)

dummytask1 = task("Task 1", "This is task 1", 1)
dummytask2 = task("Task 2", "This is task 2", 2)
dummytask3 = task("Task 3", "This is task 3", 3)

dummytask4 = task("Task 4", "This is task 4", 4)
dummytask5 = task("Task 5", "This is task 5", 5)
dummytask6 = task("Task 6", "This is task 6", 6)

inbox_tasks = [dummytask1, dummytask2, dummytask3]
projectOne_tasks = [dummytask4, dummytask5, dummytask6]

projects = {0: inbox_tasks, 1: projectOne_tasks}
console.log(projects[0])





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
