import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     list: [
      {
        id:1,
        title:'1111111111'
      },
      {
        id:2,
        title:'2222222222222'
      },
      {
        id:3,
        title:'3333333333'
      }
     ]           
    }
  }
  render () {

    return (
      <div>
        <ul>
          {this.state.list.map((item,index)=>
            <Item1 key={item.id}  {...item}/>
          )}
        </ul>
      </div>
    )
  }
}
// 静态
// function Item(prop) {
//   return (
//     <li onClick={()=>this.show()}>
//       <p>{prop.id}</p>
//       <p>{prop.title}</p>
//     </li>
//   )
// }
// 动态
class Item1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <li onClick={(e)=>this.show(this.props)}>
      <p>{this.props.id}</p>
      <p>{this.props.title}</p>
    </li>
    )
  }
  show=(arg)=>{
    console.log(arg)
  }
}

ReactDOM.render(
  <div>
    <Welcome />
  </div>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
