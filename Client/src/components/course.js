import React, {Component} from 'react';

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            edit: false,
            id: this.props._id,
            name: this.props.name
        }
        this.editButton = this.editButton.bind(this);
        this.cancelButton = this.cancelButton.bind(this);
        this.submitCourse = this.submitCourse.bind(this);
    }
    editButton(){
        this.setState({edit: true})
    }
    cancelButton() {
        this.setState({edit:false})
    }
    submitCourse() {
        const courseId = this.state.id;
        fetch('http://localhost:3001/courses/'+courseId,{
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({
                name: document.getElementById('courseName').value
            })
        })
        .then(response => response.json())
        .then(data => this.setState({name: data.course.name }))
        .catch(console.log('Error has occurred'));
        this.setState({edit: false});
    }
    render() { 
        const {edit} = this.state;
        return(
            <div id={this.state.id} className="course">
                {this.state.name}
                <button onClick={this.editButton}>Edit</button>
                {edit &&
                    <div id="edit">
                        <input type="text" id="courseName" name="courseName" defaultValue={this.state.name} />
                        <button onClick={this.submitCourse}>Save</button>
                        <button onClick={this.cancelButton}>Cancel</button>
                    </div>
                }
            </div>
        )
    }
}
export default Course;