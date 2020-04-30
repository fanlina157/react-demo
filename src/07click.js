import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      c1:'active',
      c2:'content'
    }
    // 改变show1 的this 指向
    this.show1 = this.show1.bind(this)
  }
  render() {
    return (
      <div>
        <button onClick={this.show}>不传参写法</button>
        <button onClick={()=>this.show('1')}>一</button>
        <button onClick={()=>this.show('2')}>二</button>
        {/* 此时show1 的this 指向的是button  所以要改一下指向 */}
        <button data-index="1" onClick={this.show1}>一</button>
        <button data-index="2" onClick={this.show1}>二</button>
        <div className={this.state.c1}>内容一</div>
        <div className={this.state.c2}>内容二</div>
      </div>
    )
  }
  show(arg) {
    console.log(arg)
    if(arg === '1') {
      this.setState({
        c1:'active',
        c2:'content'
      })
    }else {
      this.setState({
        c2:'active',
        c1:'content'
      })
    }
    
  }
  show1(e) {
    console.log(e.target.dataset.index)
    let arg = e.target.dataset.index
    if(arg === '1') {
      this.setState({
        c1:'active',
        c2:'content'
      })
    }else {
      this.setState({
        c2:'active',
        c1:'content'
      })
    }
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
