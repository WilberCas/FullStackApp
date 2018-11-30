import React, {Component} from 'react';

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = { edit: false}
    }
    editButton(){
        this.setState({edit: true})
    }
    render() { 
        const {edit} = this.state;
        return(
            <div id={this.props._id} className="course" key={this.props._id}>
            {this.props.name}
                <div id="edit">
                    <button onClick={this.editButton}>Edit</button>
                </div>
            </div>
        )
    }
}
export default Course;