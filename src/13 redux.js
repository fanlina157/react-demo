import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


import {createStore} from 'redux'

// 创建新的state
const reducer = function(state = {num:0},action) {
  switch(action.type) {
    case 'add':
      state.num++;
      break;
    case 'desc':
      state.num--;    
      break;
      default:
        break;
  }
  return {...state};
}
// 创建仓库
const store = createStore(reducer)

function add() {
  store.dispatch({type:'add'})
  store.dispatch({type:'add',content:'这可以写参数'})
  console.log(store.getState())
}
function desc() {
  store.dispatch({type:'desc'})
  console.log(store.getState())
}


const Counter = function(props) {
  console.log(store.getState())
  return (
    <div>
      <p>{store.getState().num}</p>
      <button onClick={add}>+1</button>
      <button onClick={desc}>-1</button>
    </div>
  )
}

ReactDOM.render(
  <div>
    <Counter />
  </div>,
  document.getElementById('root')
)

// 监听数据变化

store.subscribe(()=>{
  
ReactDOM.render(
  <div>
    <Counter />
  </div>,
  document.getElementById('root')
)
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
