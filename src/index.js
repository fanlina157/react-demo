import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


import {createStore} from 'redux'
import { Provider, connect } from 'react-redux'

class Counter extends React.Component {
    render() {
      const value = this.props.value
      const onAdd = this.props.onAdd  
      const onDesc = this.props.onDesc
      return (
        <div>
          <p>{value}</p>
          <button onClick={onAdd}>+1</button>
          <button onClick={onDesc}>-1</button>
        </div>
      )
    }
}

const addAction = {
  type:'add'
}

function reducer(state = {num:0},action) {
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
  return {...state}
}

// 创建仓库
const store = createStore(reducer)


// 将state  映射到props
function mapStatetoProps (state) {
  return {
    value:state.num
  }
}
// 将state  映射到props
function mapActiontoProps (dispatch) {
  return {
    onAdd:()=>{ dispatch(addAction) }
  }
}

ReactDOM.render(
  <div>
    <Counter />
  </div>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
