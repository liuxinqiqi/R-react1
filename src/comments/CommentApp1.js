import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
import CommentInput1 from './CommentInput1'
import CommentList1 from './CommentList1'

class CommentApp1 extends Component{
  constructor(){
    super()
    this.state = {
      comments: []
    }
  }
  handleSubmitComment(comment){
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }
  render(){
    return (
      <div>
        <CommentInput1 onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList1 comments={this.state.comments}/>
      </div>
    )
  }
}

export default CommentApp1