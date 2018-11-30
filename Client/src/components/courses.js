import React, {Component} from 'react';
import Course from './course';

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3001/courses')
        .then(response => response.json())
        .then(data => this.setState({courses: data}))
    }
    tableOfCourses() {
        let {courses} = this.state;
        let elementCourses = [];
        courses.forEach((course) => {
            elementCourses.push(<Course {...course}/>)
        })
        return elementCourses;
    }
    render() {
        return(
            <div>
                <h1>Courses</h1>
                <div className="courses">
                    {this.tableOfCourses()}
                </div>
            </div>
        )
    }
}
export default Courses;