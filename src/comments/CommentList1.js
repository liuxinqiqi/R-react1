import React, {Component} from 'react'
import Comment1 from "./Comment1"

class CommentList1 extends Component{
  static defaultProps = {
    comments: []
  }
  render(){
    return(
      <div>
        {this.props.comments.map((comment, i) => <Comment1 comment={comment} key={i}/>)}
      </div>
    )
  }
}

export default CommentList1