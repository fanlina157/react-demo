import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

let a = "hello";
let b = 12;
let c = "1";
let d = true;
ReactDOM.render(
  <div>
    <p className="red">{a + 'world'}</p> 
    <p>{b + 'world'}</p>
    <p>{c === '1' ? <button>1</button> : 2}</p>
    <p>{d}</p>
    <p>{d.toString()}</p>

  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
