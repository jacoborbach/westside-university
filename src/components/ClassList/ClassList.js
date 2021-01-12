import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    console.log(this.props)
    const mappedStudents =
      this.state.students.map(element => {
        return (
          <Link to={`/student/${element.id}`} key={element.id}>
            <h3>{element.first_name} {element.last_name}</h3>
          </Link >
        )
      })

    return (
      <div className="box" >
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        { mappedStudents}
        <button onClick={this.goBack}>Go back</button>
      </div>
    )
  }
}