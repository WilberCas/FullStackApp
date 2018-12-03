import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import Courses from './courses'
import AddCourse from './addCourse';
class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/add-courses">Add Course</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/courses" component={Courses}/>
                    <Route path="/add-courses" component={AddCourse}/>
                </Switch>
            </div>
        )
    }
}
export default App;