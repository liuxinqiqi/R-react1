import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import '../comment1.css'

class Computer extends Component{
  constructor(){
    super();
    this.state = {
      status : 'off',
      showContent: '显示器关啦'
    }
  }
  handleTagger(){
    let sta;
    let content;
    if(this.state.status === 'on'){
      sta = 'off';
      content = '显示器关了'
    }else {
      sta = 'on';
      content = '显示器开啦'
    }

    this.setState({
      status: sta,
      showContent: content
    })
  }

  render(){
    return(
      <div>
        <button onClick={() => this.handleTagger()}>开关</button>
        <Screen showContent={this.state.showContent}/>
      </div>
      )
  }
}

class Screen extends Component{
  static defaultProps = {
    showContent: '没内容'
  };
  render(){
    const showContent = this.props.showContent;
    return(
      <div className='screen'>{showContent}</div>
    )
  }
}


class Index extends Component{
  render(){
    return(
      <div>
        <Computer/>
        <Screen/>
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>,
    document.getElementById('root')
);