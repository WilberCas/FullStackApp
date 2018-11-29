import React, {Component} from 'react';

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: null
        }
        this.tableOfCourses = this.tableOfCourses.bind(this);
    }
    componentDidMount() {
        fetch('http://localhost:3001/courses')
        .then(response => response.json())
        .then(data => this.setState({courses: data}))
    }
    tableOfCourses() {
        let {courses = []} = this.state;
        let elementCourses = [];
        courses.forEach((course) => {
            let eachCourse = <li id={course._id}>{course.name}</li>;
            elementCourses.push(eachCourse);
        })
        return elementCourses;
    }
    render() {
        return(
            <div>
                <ul>{this.tableOfCourses}</ul>
            </div>
        )
    }
}
export default Course;