import { div } from './index.js'
import gif from './assets/BlkHo.gif'

export default function lazy(a,b) {
  console.log('我是一个懒加载的模块')
  div.innerHTML += `
  <img src="${gif}">
`
  return console.log(a * b)
}