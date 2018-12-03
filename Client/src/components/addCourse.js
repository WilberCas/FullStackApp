import React, {Component} from 'react';

class AddCourse extends Component {
    constructor(props) {
        super(props);

    }
    submitCourse() {
        fetch('http://localhost:3001/courses',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: document.getElementById('courseName').value
            })
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }
    render() {
        return(
            <div>
                <h1>Add a course</h1>
                <label>Enter Name: </label>
                <input type="text" id="courseName" name="courseName"/>
                <button onClick={this.submitCourse}>Create</button>
            </div>
        )
    }
}

export default AddCourse;