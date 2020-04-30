import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


class ParentCom extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      msg:null
    }
    
  }
  render() {
    return (
      <div>      
        <ChildCom  setChildData={this.setChildData} />
        { this.state.msg}
      </div>
    )
  }
  setChildData=(childData)=>{
    this.setState({
      msg:childData
    })
  }
}

class ChildCom extends React.Component {
    constructor(props) {
    super(props)
    this.state={
      childData:'我是子组件'
    } 
  }
  render() {
    return (
      <div>
        <button onClick={this.sendToParent}>点击传值给父组件</button>
        <button onClick={()=>this.props.setChildData(this.state.childData)}>直接调用</button>
      </div>
    )
  }
  sendToParent=()=>{
    console.log(this.state.childData)
    // 将子元素的数据传递给父元素，实际上就是 调用父元素的函数，传参进去
   this.props.setChildData(this.state.childData)

  }
}

ReactDOM.render(
  <div>
    <ParentCom />
  </div>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
