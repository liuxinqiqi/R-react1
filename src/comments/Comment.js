import React, {Component} from 'react'

class Comment extends Component{
  render(){
    return(
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username}</span> :
        </div>
        <span>{this.props.comment.content}</span>
      </div>
    )
  }
}

export default Comment