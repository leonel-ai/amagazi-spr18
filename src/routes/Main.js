import React, { Component } from 'react';
import {
    Switch,
    Route, NavLink, Redirect,
    BrowserRouter as Router,
} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Collapsible from 'react-collapsible';

import Home from './Home';
import About from './About';
import Services from './Services';
import Work from './Work';
import NotFound from './NotFound';
import Privacy from './Privacy';

class Routes extends Component {

	burgerToggle() {
		let menuLinks = document.querySelector('.Collapsible__trigger.is-open.menu-contents');
		if (menuLinks.style.display === 'block') {
			menuLinks.style.display = 'none';
		} else {
			menuLinks.style.display = 'block';
		}
	}
	render() {
		return (
			<Router>
				<ScrollToTop>
				<div className="App">

				<div className="NavBar">
					<NavLink activeStyle={{ color: '#FFC425' }} exact to='/'>amagazi</NavLink>
					<NavLink activeStyle={{ color: '#FFC425' }} to='/about'>about</NavLink>
					<NavLink activeStyle={{ color: '#FFC425' }}to='/services'>services</NavLink>
					<NavLink activeStyle={{ color: '#FFC425' }}to='/work'>work</NavLink>
					<a href="https://medium.com/@amagazi" rel="noopener noreferrer" target="_blank">the scoop</a>
				</div>


				<div className="NavMobile">
					<Collapsible trigger="menu" transitionTime={300}>
						<div className="menu-content">
							<ul>
							<li><NavLink activeStyle={{ color: '#FFC425' }} onClick={this.burgerToggle} exact to='/'>amagazi</NavLink></li>
							<li><NavLink activeStyle={{ color: '#FFC425' }} onClick={this.burgerToggle} to='/about'>about</NavLink></li>
							<li><NavLink activeStyle={{ color: '#FFC425' }} onClick={this.burgerToggle} to='/services'>services</NavLink></li>
							<li><NavLink activeStyle={{ color: '#FFC425' }} onClick={this.burgerToggle} to='/work'>work</NavLink></li>
							<li><a href="https://medium.com/@amagazi" rel="noopener noreferrer" target="_blank">the scoop</a></li>
							</ul>
						</div>
					</Collapsible>
				</div>

				<Switch>
					<Redirect from='/phone/' to='/'/>
					<Route exact path="/" render={(props) => <Home {...props} />} />
					<Route exact path="/about" render={(props) => <About {...props} />} />
					<Route exact path="/services" render={(props) => <Services {...props} />} />
					<Route exact path="/work" render={(props) => <Work {...props} />} />
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
