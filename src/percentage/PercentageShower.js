import React, {Component} from 'react'

class PercentageShower extends Component{
  render(){
    const num = this.props.number.number * 100
    return (
      <div>
        {console.log(this.props.number)}
        the number PercentageShower is {num.toFixed(2)}%
      </div>
    )
  }
}

export default PercentageShower