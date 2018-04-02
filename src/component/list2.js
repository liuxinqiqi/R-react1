import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const users  = [
  { username: 'Jerry', age: 21, gender:'male'},
  { username: 'Tony', age: 22, gender:'male'},
  { username: 'lily', age: 19, gender: 'female'},
  { username: 'lucy', age: 20, gender: 'female'}
]

/*
class Index extends Component {
  render(){
    const usersElements = []   // 保存每个用户渲染以后 jsx 的数组
    for (let user of users){
      usersElements.push(    // 循环每个用户，构建jsx，push到数组中
        <div>
          <div>姓名：{user.username} </div>
          <div>年龄：{user.age} </div>
          <div>性别：{user.gender} </div>
          <hr/>
        </div>
      )
    }

    return (
      <div>{usersElements}</div>
    )
  }
}
*/

// 以下是用map简写方式
/*
class Index extends Component{
  render(){
    return (
      <div>
        {users.map((user) => {
          return (
            <div>
              <div>姓名: { user.username } </div>
              <div>年龄: { user.age } </div>
              <div>性别: { user.gender } </div>
              <hr/>
            </div>
          )
        })}
      </div>
    )
  }
}
*/

// 代码优化,剥离出User（把渲染单独一个用户的结构抽离出来作为一个组件）
class User extends Component{  // 一个用户的信息
  render(){
    const { user } = this.props
    return (
      <div>
        <div>姓名: {user.username} </div>
        <div>年龄: {user.age} </div>
        <div>性别: {user.gender} </div>
        <hr/>
      </div>
    )
  }
}

class Index extends Component{
  render(){
    return (
      <div>
        {/*遍历用户列表，获取每一个用户信息*/}
        {users.map((user, i) => <User key={i} user={user} />)}
      </div>
    )
  }
}
ReactDOM.render(
  <Index />,
  document.getElementById('root')
)

