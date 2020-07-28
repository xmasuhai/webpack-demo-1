import x from './x.js'
import gif from './assets/BlkHo.gif'
import png from './assets/1.png'

// console.log(gif)
// console.log(png)
// console.log('x')
// console.log(x)
// x()

import hardwork from './hardwork.js'


const div = document.getElementById('app')
// console.log('div')
// console.log(div)
div.innerHTML = `
  <img src="${png}">
`
const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
  console.log("点击了 button")
  const lazyPromise = import('./lazy.js')
  // 加载时异步的 拿到的是一个 Promise对象实例
  lazyPromise.then((module) => {
    console.log(module)
    const fn = module.default
    fn(2,3)
  }, () => {
      console.log("模块加载错误")
  })
}
div.appendChild(button)

export { div, button }


// console.log(hardwork(3,2))
// hardwork(2,7)