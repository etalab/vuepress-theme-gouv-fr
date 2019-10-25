const dirTree = require('directory-tree')

function getFolders () {
  // look for non hidden or special dirs with md in them
  const excludes = [/node_modules/, /\.git/, /public/]
  return dirTree('.', {extensions:/\.md/, exclude: excludes}).children.filter(child => {
    return child.type === 'directory' && !child.name.startsWith('.')
  }).map(child => {
    return child.name
  })
}

function getSidebar () {
  // build the sidebar from directory structure
  const sidebar = {}
  const folders = getFolders()
  let children, folderPath
  // add each folder with its chapters
  folders.forEach(folder => {
    folderPath = `/${folder}/`
    sidebar[folderPath] = ['']
    children = dirTree(`./${folder}`, {extensions:/\.md/})
    children.children.forEach(child => {
      if (child.type === 'file' && child.name !== 'README.md' && child.name !== 'index.md') {
        sidebar[folderPath].push(child.name)
      }
    })
  })
  // add a fallback with the folders list
  sidebar['/'] = folders.map(folder => `/${folder}/`)
  return sidebar
}


module.exports = {getSidebar, getFolders}
