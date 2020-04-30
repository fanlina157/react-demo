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
    // console.log(this.state.time)
  }
  // 视图
  render() {
    return (
    <div><h1>当前时间：{this.state.time}</h1></div>
    )
  }
  // 生命周期
  componentDidMount() {
   
    setInterval(()=>{
      // setState()
      // console.log(this.state.time)
      this.setState({time:new Date().toLocaleTimeString()})
      // console.log(this.state.time)
    },1000)
  }
}

ReactDOM.render(
  <div>
    <Hello />
  </div>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
