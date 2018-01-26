import React, { Component } from 'react';
import {
    Switch,
    Route, NavLink, Redirect,
    BrowserRouter as Router,
} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import Home from './Home';
import About from './About';
import Services from './Services';
import NotFound from './NotFound';
import Privacy from './Privacy';

class Routes extends Component {
    render() {
        return (
             <Router>
                 <ScrollToTop>
                <div className="App">

                        <div className="NavBar">
                            <NavLink activeStyle={{ color: '#FFC425' }} exact to='/'>amagazi</NavLink>
                            <NavLink activeStyle={{ color: '#FFC425' }} to='/about'>about</NavLink>
                            <NavLink activeStyle={{ color: '#FFC425' }}to='/services'>services</NavLink>
                            <a href="https://medium.com/@amagazi" rel="noopener noreferrer" target="_blank">the scoop</a>
                        </div>

                    <Switch>
                    <Redirect from='/phone/' to='/'/>
                    <Route exact path="/" render={(props) => <Home {...props} />} />
                    <Route exact path="/about" render={(props) => <About {...props} />} />
                    <Route exact path="/services" render={(props) => <Services {...props} />} />
                    <Route exact path="/privacy" render={(props) => <Privacy {...props} />} />
                    <Route path="/*" render={(props) => <NotFound {...props} />} />

                    </Switch>

                </div>
            </ScrollToTop>
            </Router>
        );
    }
}


export default Routes;
