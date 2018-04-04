import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import './comment1.css'

const lessons  = [
  { title: 'Lesson 1: title1', description: 'Lesson 1: description1'},
  { title: 'Lesson 2: title2', description: 'Lesson 2: description2'},
  { title: 'Lesson 3: title3', description: 'Lesson 3: description3'},
  { title: 'Lesson 4: title4', description: 'Lesson 4: description4'}
]

class Lesson extends Component{
  render(){
    const {lesson} = this.props
    return(
      <div onClick={() => console.log(`${this.props.index} - ${lesson.title}`)}>
        <h1>{lesson.title}</h1>
        <p>{lesson.description}</p>
      </div>
    )
  }
}

// class LessonsList extends Component{
//   render(){
//     return(
//       <div>{this.props.lessons.map((lesson, i) => {
//         return <Lesson key={i} index={i} lesson={lesson}/>
//       })}</div>
//     )
//   }
// }

class Index extends Component{
  render(){
    return (
      <div>
        {lessons.map((lesson, i) => <Lesson key={i} index={i} lesson={lesson}/>)}
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
)


