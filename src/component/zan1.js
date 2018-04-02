import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

class Header extends Component{
  renderGoodWord(goodWord, badWord){
    const isGoodWord = false
    return isGoodWord ? goodWord : badWord
  }
  render(){
    const className = 'learn'
    const result = 1+2
    const isGoodWord = true
    return(
      <div id='male'>
      {/*都是h1标签，都占一整行*/}
        <Title />
        <Title />
        <Title />
        <h2>This is header.</h2>
        <h2 className={className}>React 小书是 {result} </h2>
        <label htmlFor='male'>Male</label>
        <h1>
          react小书
          {this.renderGoodWord(
            <strong style={{'color':'green'}}> is good</strong>,
            <span style={{'color':'red'}}> is not good </span>
          )}
          {isGoodWord ? <strong> is good</strong> : <strong>is not good</strong>}
        </h1>
      </div>
    )
  }
}

class Title extends Component{
  render(){
    return(
      <h1 style={{'color':'yellow'}}>react 小书’title</h1>
    )
  }
}


ReactDOM.render(<Header />, document.getElementById('root'));
// registerServiceWorker();
