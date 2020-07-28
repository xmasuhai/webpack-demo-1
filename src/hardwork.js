import { div } from './index.js'
import gif1 from './assets/aaa.gif'

export default function hardwork(a,b) {
  console.log('我是一个立即加载的模块')
  div.innerHTML += `
  <img src="${gif1}">
`
  return console.log(a + b)
}