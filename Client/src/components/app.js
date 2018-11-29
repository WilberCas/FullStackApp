import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import Course from './course'
class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </nav>
                <Route path="/courses" component={Course}/>
            </div>
        )
    }
}
export default App;