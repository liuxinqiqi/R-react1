import React, {Component} from 'react'
import PercentageInput from './PercentageInput'
import PercentageShower from './PercentageShower'
// import ReactDOM from 'react-dom'

class PercentageApp extends Component{
  constructor(){
    super()
    this.state = {
      number: 0
    }
  }
  handleChange(value){
    this.setState({
      number: value
    })
  }
  render(){
    return (
      <div>
        <PercentageInput onSubmit={this.handleChange.bind(this)}/>
        <PercentageShower number={this.state.number}/>
      </div>
    )
  }
}

export default PercentageApp