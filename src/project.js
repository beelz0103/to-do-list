export { allProjects, createProjectObject, prjId, project, setPrjId }

let prjId = null

function setPrjId(pid) {
  prjId = pid
}

const allProjects = []

const project = (title) => {
  const id = prjId.toString()
  const tasks = []
  prjId += 1
  return {title, id, tasks}
}

const createProjectObject = (projectValues) => {
  const projecTitle = projectValues.title
  const newProject = project(projecTitle)
  allProjects.push(newProject)
}

// const inbox = project("Inbox")
// allProjects.push(inbox)