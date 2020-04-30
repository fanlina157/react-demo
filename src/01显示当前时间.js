import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


// 显示当前时间
// 写法一


// function clock() {
//   // let time = new Date().toLocaleDateString()   //2020/4/20
//   let time = new Date().toLocaleTimeString()  //下午4:12:01
//   ReactDOM.render(
//   <h1>{time}</h1>,
//     document.getElementById('root')
//   );
// }
// setInterval(()=>{
//   clock()

// },1000)



// 写法二

function Clock(props) {
  return (
  <h1>{props.time}</h1>
  )
}
function run() {
  ReactDOM.render(
    <Clock time={ new Date().toLocaleTimeString() }></Clock>,
    document.getElementById('root')
  )
}
setInterval(()=>{
  run()
},1000)


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
