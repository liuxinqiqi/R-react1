import React,{Component} from 'react'

class PercentageInput extends Component{
  constructor(){
    super()
    this.state = {
      number : 0
    }
  }
  handleClickHandle(event){
    this.setState(
      {number: event.target.value},
      () => {
       if(this.props.onSubmit){
         const {number} = this.state
         this.props.onSubmit({number})
       }
      }
    )
  }
  render(){
    return (
      <div>
        Please input a number : <input type='number' onChange={this.handleClickHandle.bind(this)}/>
      </div>
    )
  }
}

export default PercentageInput