import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

let exStyle = {
  fontSize:'23px'
}
{/* 这里是注释 */}
let exClass = 'green'
let exClass1 = ['green', 'red'].join(" ")
ReactDOM.render(
  <div>
    <h1 style={exStyle}>这是变量声明的样式</h1>
    <h1 className='red'>这是变量声明的样式</h1>
    <h1 className={exClass + ' red'}>这是变量声明的样式</h1>
    <h1 className={exClass1}>这是变量声明的样式</h1>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
