import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
  handleDoubleClickOnTitle(){
    console.log('dblClick on title!!!');
    console.log(this); //undefined
  }
  handleClickOnTitle(word, e){    // 这里有两个相同的函数，前面的被后面的覆盖
    console.log(e.target.innerHTML);
    console.log(this); //bind绑定前的this是undefined，绑定后是title的实例
    console.log(word); //HELLO
  }
  render(){
    return (
      //函数调用没加()
      <h1 onDoubleClick={this.handleDoubleClickOnTitle}>
        <span onClick={this.handleClickOnTitle.bind(this,'HELLO')}> React 小书 </span>
      </h1>
    )
  }
}


class Header extends Component{
  render(){
    return (
      <div>
        <Title />
        <h2>This is Header</h2>
      </div>
    )
  }
}

class Main extends Component{
  render(){
    return(
      <div>
        <h2>This is main content</h2>
      </div>
    )
  }
}

// class Footer extends Component {
//   render () {
//     return (
//     <div>
//       <h2>This is footer</h2>
//     </div>
//     )
//   }
// }
class Footer extends Component{
  render(){
    return(
      <div>
        <h2>This is footer.</h2>
      </div>
    )
  }
}

class Dog extends Component{
  bark(){
    console.log('bark');
  }
  run(){
    console.log('run');
  }
  render(){
    // 要不要括号看函数申明还是函数调用
    // 没有实际的点击就要触发跑和叫，所以需要直接调用函数。小书例子中的代码写的是真实的点击才触发的场景。
    return (<div onClick={() => {this.bark(); this.run()}}>DOG</div>)    //函数调用加()
    // return (<div onClick={this.bark; this.run}>DOG</div>)  // 显示错误
  }
}

class Index extends Component{
  render(){
    return(
      <div>
        <Header />
        <Main />
        <Footer />
        <Dog />
      </div>
    )
  }
}
ReactDOM.render(
  <Index />,
  document.getElementById('root')
)
