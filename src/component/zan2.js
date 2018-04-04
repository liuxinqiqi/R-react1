import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import '../comment1.css';


class LikeButton extends Component{
  constructor(){
    super()
    this.state =  {isLiked: false}
  }

  handleClickOnLikeButton(){
    this.setState({
      isLiked: !this.state.isLiked
    })
    if(this.props.onClick){
      this.props.onClick()
    }
  }

  render(){
    const wordings = this.props.wordings || {
      likedText:'取消',
      unlikedText:'点赞'
    }
    // const likedText = this.props.likedText || '取消'
    // const unlikedText = this.props.unlikedText || '点赞'
    console.log(wordings.likedText, wordings.unlikedText)  //取消  点赞 （修改标签属性后变为已赞  赞）
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? wordings.likedText : wordings.unlikedText}👍
      </button>
    )
  }
}


class Index extends Component{
  render(){
    return(
      <div>
        <LikeButton wordings={{likedText:'已赞', unlikedText:'赞'}}
        onClick={() => console.log('Click on like button!!!')}/>
        {/*<LikeButton likedText='已赞' unlikedText='赞'/>*/}
      </div>
    )
  }
}
ReactDOM.render(
  <Index/>,
  document.getElementById('root')
)