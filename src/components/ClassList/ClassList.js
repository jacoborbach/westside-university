import React, { Component } from 'react';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount = () => {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(res => this.setState({ students: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    // console.log(this.props)
    const mappedStudents =
      this.state.students.map(element => {
        return (
          <h3 key={element.id}>{element.first_name} {element.last_name}</h3>
        )
      })

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedStudents}
      </div>
    )
  }
}