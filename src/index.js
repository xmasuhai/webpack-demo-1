import x from './x.js'
import gif from './assets/BlkHo.gif'
import png from './assets/1.png'
console.log(gif)
console.log(png)
// console.log('x')
// console.log(x)
// x()
const div = document.getElementById('app')
console.log('div')
console.log(div)
div.innerHTML = `
  <img src="${gif}">
  <img src="${png}">
`