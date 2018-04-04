import React, {Component} from 'react'

class CommentInput1 extends Component{
  constructor(){
    super()
    this.state = {
      username: '',
      comment: ''
    }
  }
  handleUsernameChange(event){
    this.setState({
      username: event.target.value
    })
  }
  handleContentChange(event){
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit(){
    // console.log('---')
    if(this.props.onSubmit){
      console.log(this.props.onSubmit)   // handleSubmitComment(comment)
      const {username, content} = this.state
      this.props.onSubmit({username, content})
    }
    this.setState({content: ''})
  }
  render(){
    return (
      <div>
        <div>
          用户名：
          <span>
            <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
          </span>
        </div>
        <p>评论内容：
          <span>
            <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)}>
            </textarea>
          </span>
        </p>
        <button onClick={this.handleSubmit.bind(this)}>提交</button>
      </div>
    )
  }
}

export default CommentInput1