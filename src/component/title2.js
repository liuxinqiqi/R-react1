import React, {Component} from 'react'
import ReactDOM from 'react-dom'

/*

现在需要你构建两个组件。一个组件为 Lesson 组件，渲染特定章节的内容。可以接受一个名为 lesson 的 props，并且把章节以下面的格式显示出来：

<h1>Lesson 1: title</h1>
<p>Lesson 1: description</p>
点击每个章节的时候，需要把章节在列表中的下标和它的标题打印（console.log）出来，例如第一个章节打印： 0 - Lesson 1: title，第二个章节打印：1 - Lesson 2: title。

另外一个组件为 LessonsList，接受一个名为 lessons 的 props，它会使用 Lesson 组件把章节列表渲染出来。

*/
const lessons  = [
  { title: 'Lesson 1: title1', description: 'Lesson 1: description1'},
  { title: 'Lesson 2: title2', description: 'Lesson 2: description2'},
  { title: 'Lesson 3: title3', description: 'Lesson 3: description3'},
  { title: 'Lesson 4: title4', description: 'Lesson 4: description4'}
]


class Lesson extends Component {
  render () {
    const { lessonx } = this.props
    return (
      <div onClick={() => console.log(`${this.props.index} - ${lessonx.title}`)}>
        <h1>{lessonx.title}</h1>
        <p>{lessonx.description}</p>
      </div>
    )
  }
}


// LessonList接收一个props 就是说题目中的Lesson数组是一个数据结构传过来的，所以你要用 this.props.lesson.map（）去操作这个数组
class LessonsList extends Component {
  render () {
    return (
      <div>{this.props.lessonsy.map((lesson, i) => {
        return <Lesson key={i} index={i} lessonx={lesson} />
      })}</div>
    )
  }
}


class Index extends Component{
  render(){
    return (
      <div>
        <LessonsList lessonsy = {lessons} />
      </div>

    )
  }
}
ReactDOM.render(
  <Index />,
  document.getElementById('root')
)

//标准参考答案
