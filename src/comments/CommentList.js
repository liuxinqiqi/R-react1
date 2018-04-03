import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component{
  static defaultProps = {
    comments: []
  }
  render(){
    // const comments = [
      // {username: 'Terry', content: 'Hello'},
      // {username: 'Tony', content: 'World'},
      // {username: 'Lucy', content: 'Good'}
    // ]
    return(
      // {/*<div>{comments.map((comment, i) => <Comment comment={comment} key={i} />)}</div>*/}
      // {/*<div>{comments.map((comment, i) => {return (<div key={i}>{comment.username} : {comment.content}</div>)})}</div>*/}
      <div>
        {this.props.comments.map((comment, i) => <Comment comment={comment} key={i}/>)}
      </div>
    )
  }
}

export default CommentList