export {project}

let prjId = 1

const project = (title) => {
  const id = prjId.toString()
  const tasks = []
  prjId += 1
  return {title, id, tasks}
}