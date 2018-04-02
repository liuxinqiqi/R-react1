import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import '../index.css'

class LikeButton extends Component{
  constructor(){
    super()
    //isLiked 存放在实例的 state 对象当中，这个对象在构造函数里面初始化
    this.state = {
      name: 'Tony',
      isLiked: false,
      count: 10
    }
  }
  handleClickOnClickButton(){
    console.log(this.state.isLiked)
    // 要使用 React.js 提供的 setState 方法，
    // 它接受一个对象或者函数作为参数。
    // setState 接受函数参数调用 setState 的时候，
    // React.js 并不会马上修改 state。
    // 而是把这个对象放到一个更新队列里面，
    // 稍后才会从队列当中把新的状态提取出来合并到 state 当中，
    // 然后再触发组件更新。

    //
    /*this.setState({
      count: 0,
      isLiked: !this.state.isLiked  //undefined
    })
    this.setState({
      count: this.state.count + 1    //NaN
    })
    this.setState({
      count: this.state.count + 2    //NaN
    })*/
    this.setState((prevState) => {
      return {
        count: 0,
        isLiked: !this.state.isLiked
      }
    })
    this.setState((prevState) => {
      return {count: prevState.count + 1}
    })
    this.setState((prevState) => {
      return {count: prevState.count + 2}
    })
    console.log(this.state.isLiked, this.state.count)    // 3

  }
  render(){
    return(
      <button onClick={this.handleClickOnClickButton.bind(this)}>
        {this.state.isLiked ? '取消' : '点赞'}  👍
      </button>
    )
  }
}

class Dog extends Component{
  constructor(){
    super()
    this.state = {
      isRunning: false,
      isBarking: false
    }
  }

  getRandomArbitrary(min, max){
    return Math.floor(Math.random() * (max - min )) + min;
  }

  run(){
    console.log('run')
    this.setState({isRunning: true})
    setTimeout(() => this.setState({isRunning: false}), this.getRandomArbitrary(2000, 5000))
  }

  bark(){
    console.log('bark')
    this.setState({isBarking: true})
    setTimeout(() => this.setState({isBarking: false}), this.getRandomArbitrary(2000, 5000))
  }

  handleDog(){
    this.bark()
    this.run()
  }

  render(){
    return(
      <div>
        <button onClick={this.handleDog.bind(this)}>HandleDog</button>
        <h5>
          {this.state.isRunning ? 'Dog is Running' : 'Dog is stop running'}
        </h5>
        <h5>
          {this.state.isBarking ? 'Dog is Barking' : 'Dog is stop Barking'}
        </h5>
      </div>
    )
  }
}

class Cat extends Component{
  constructor(){
    super()
    this.state = {isEating: false}
  }
  getRandomArbitrary(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
  }
  eat(){
    console.log('eating')
    this.setState({isEating: true})
    // setTimeout(() => this.setState({isEating: false}), this.getRandomArbitrary(2000, 5000))
  }
  render(){
    return (
      <div onClick={this.eat.bind(this)}>Cat</div>
    )
  }

}

class Student extends Component{
  constructor(){
    super()
    this.state = {isStudying: true}
  }
  study(){
    // console.log('the student is study')
    this.setState({isStudying: !this.state.isStudying})
    // setTimeout(() => {this.setState({isStudying: true})})
  }
  render(){
    return(
      <div onClick={this.study.bind(this)}>Student is {this.state.isStudying ? '学习' : '继续学吧'}</div>
    )
  }
}

class Index extends Component{
  render(){
    return(
      <div>
        <LikeButton/>
        <Dog/>
        <Cat/>
        <Student/>
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
)