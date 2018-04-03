import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
  handleSubmitComment(comment){
    console.log(comment)
  }
  render(){
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList/>
      </div>
    )
  }
}

export default CommentApp