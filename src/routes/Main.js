import React, { Component } from 'react';
import { 
    Switch, 
    Route, Link, 
    BrowserRouter as Router,
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Services from './Services';
import NotFound from './NotFound';


class Routes extends Component {
    render() {        
        return (
             <Router>
                <div className="App">

                        <div className="NavBar">
                            <Link to='/'><div className="agit">amagazi</div></Link>
                            <Link to='/about'>about</Link>
                            <Link to='/services'>services</Link>
                            <a href="https://medium.com/@amagazi">gossip</a>
                        </div>

                    <Switch>

                    <Route exact path="/" render={(props) => <Home {...props} />} />
                    <Route exact path="/about" render={(props) => <About {...props} />} />
                    <Route exact path="/services" render={(props) => <Services {...props} />} />
                    <Route exact path="/*" render={(props) => <NotFound {...props} />} />

                    </Switch>

                </div>

            </Router>
        );
    }
}


export default Routes;