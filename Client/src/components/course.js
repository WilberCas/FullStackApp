import React, {Component} from 'react';

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = { edit: false, status: null}
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
        fetch('http://localhost:3001/courses',)
        .then(response() => response.json())
        .then(data => this.setState({status: data}))
    }
    render() { 
        const {edit} = this.state;
        return(
            <div id={this.props._id} className="course">
                {this.props.name}
                <button onClick={this.editButton}>Edit</button>
                {edit &&
                    <div id="edit">
                        <input type="text" name="courseName" defaultValue={this.props.name} />
                        <button onClick={this.submitCourse}>Save</button>
                        <button onClick={this.cancelButton}>Cancel</button>
                    </div>
                }
            </div>
        )
    }
}
export default Course;