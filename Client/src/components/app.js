import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import Courses from './courses'
class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                    </ul>
                </nav>
                <Route path="/courses" component={Courses}/>
            </div>
        )
    }
}
export default App;