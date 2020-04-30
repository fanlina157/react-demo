import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'

function LoginInfo(props) {
  console.log(props)

  // 这是通过 state 传参
  if(props.location.state.loginState === 'success') {
    return (
      <Redirect to="/admin"></Redirect>
    )
  }else {
    return (
      <Redirect to="/login"></Redirect>
    )
  }
}

let login = ()=>{
  let obj = {
    pathname:'/logininfo',
    state:{
      loginState:'success'
    }
  }
  return (
    <div>
      <Link to={obj} >登录</Link>
    </div>
  )
}

class ChildCom extends React.Component {
  render() {
    return (
      <button onClick={this.show}>
        点击回首页
      </button>
    )
  }
  show=()=>{
    // console.log(this.props);
    this.props.history.push("/",{msg:'给首页的数据'})
    
  }
}
class App  extends React.Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={(props)=>{console.log(props);return(<div>首页</div>)}}></Route>
          <Route path="/login" exact component={()=>(<div> <Link to="/logininfo?loginState='success'" >登录</Link> </div>)}></Route>
          <Route path="/login" exact component={login}></Route>
          <Route path="/logininfo" exact component={LoginInfo}></Route>
          <Route path="/abc" exact component={()=>(<div>首页1</div>)}></Route>
          <Route path="/abc" exact component={()=>(<div>首页2</div>)}></Route>
          <Route path="/child" exact component={ChildCom}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
