import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class Hello extends React.Component {
  // 状态-私有
  constructor(props) {
    super(props) 
    this.state = {
      time:new Date().toLocaleTimeString()
    }
    console.log(this.state.time)
  }
  // 视图
  render() {
    // 下面不加eslint 报错
   // eslint-disable-next-line  
    this.state.time = new Date().toLocaleTimeString()
    return (
    <div><h1>当前时间：{this.state.time}</h1></div>
    )
  }
}

ReactDOM.render(
  <div>
    <Hello />
  </div>,
  document.getElementById('root')
);

setInterval(()=>{
  // 反复渲染同一组件，不会重复渲染，所以要在render 的时候重新赋值
  ReactDOM.render(
    <div>
      <Hello />
    </div>,
    document.getElementById('root')
  );
},1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
