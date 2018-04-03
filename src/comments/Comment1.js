import React, {Component} from 'react'

class Comment1 extends Component{
  render(){
    return(
      <div>
          <span>{this.props.comment.username}</span> :
        <span>{this.props.comment.content}</span>
      </div>
    )
  }
}

export default Comment1