import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import '../comment1.css'

class LikeButton extends Component{
  static defaultProps = {
    likedText:'取消',
    unlikedText:'点赞'
  }

  constructor(){
    super()
    this.state = {isLiked: false}
  }

  handleClickOnLikeButton(){
    // this.props.likedText = '取消'    //报错
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render(){
    return(
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? this.props.likedText : this.props.unlikedText}👍
      </button>
    )
  }
}


class Index extends Component{
  constructor(){
    super()
    this.state = {
      likedText:'已赞',
      unlikedText:'赞'
    }
  }

  handleClickOnChange(){
    this.setState({
      likedText:'取消',
      unlikedText:'点赞'
    })
  }
  render(){
    return(
      <div>
        <LikeButton
          likedText={this.state.likedText}
          unlikedText={this.state.unlikedText}
        />
        <div>
          <button onClick={this.handleClickOnChange.bind(this)}>修改wordings</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
)

