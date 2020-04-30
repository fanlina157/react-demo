import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


class ParentCom extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      isActive: true
    }
    
  }
  render() {
    return (
      <div>
        <button onClick={()=>{this.show()}}> 控制子组件显示或隐藏</button>
        <ChildCom isActive={this.state.isActive} />
      </div>
    )
  }
  show() {
    this.setState({
      isActive:!this.state.isActive
    })
  }
}

class ChildCom extends React.Component {
    constructor(props) {
    super(props)
    this.state={} 
  }
  render() {
    if(this.props.isActive) {
      return (
        <div>子组件</div>
      )
    }else {
      return null
    }
    
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
