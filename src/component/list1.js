import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class HelloWorld extends Component{
  constructor(){
    super()
    this.state = {state:false}
  }
  render(){
    return(
      <div>输出</div>
    )
  }
}


class Index extends Component{
  render(){
    return(
      <div>
        {[
          <span>React.js </span>,
          <span>is </span>,
          <span>good.</span>
        ]}
        <HelloWorld/>
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
)