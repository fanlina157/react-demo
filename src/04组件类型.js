import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// 函数式组件 return
function Hello(props) {
  let titleName =  <p> 这是 Hello副标题 </p>
  
  return  (
    <div> 
      <h1>今天天气:{props.weather} </h1> 
      {titleName} 
      <Hi weather="出太阳" />
    </div>
  )   //在组件中  必须返回一个合法的虚拟jsx  dom  元素
}
// 类组件
class Hi extends React.Component {
  render() {
    return (
      <div><h1>今天天气:{this.props.weather} </h1></div>
    )
  }
}
ReactDOM.render(
  <div>
   <Hello weather="出太阳" />
   {/* <Hi weather="出太阳"/> */}
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
