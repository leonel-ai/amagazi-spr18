import React, { Component } from 'react';
import { 
    Switch, 
    Route, Link, 
    BrowserRouter as Router,
} from 'react-router-dom';

import TransitionGroup from "react-transition-group/TransitionGroup";

import Home from './Home';
import About from './About';
import Services from './Services';
import News from './News';
import NotFound from './NotFound';

const firstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  };

class Routes extends Component {
    render() {        
        return (
             <Router>
                <div className="App">

                        <div className="NavBar">
                            <Link to='/'>home</Link>
                            <Link to='/about'>about</Link>
                            <Link to='/services'>services</Link>
                            <Link to='/news'>news</Link>
                        </div>

                    <TransitionGroup component={firstChild}>
                
                    <Switch>
                    <Route path="/" exact render={(props) => <Home {...props} />} />

                    <Route path="/about" exact children={({match, ...rest}) => (
                        <TransitionGroup component={firstChild}> 
                            {match && <About {...rest} />} 
                        </ TransitionGroup >)} />

                    <Route path="/services" exact children={({match, ...rest}) => (
                        <TransitionGroup component={firstChild}> 
                            {match && <Services {...rest} />} 
                        </ TransitionGroup >)} />

                    <Route path="/news" exact children={({match, ...rest}) => (
                        <TransitionGroup component={firstChild}> 
                            {match && <News {...rest} />} 
                        </ TransitionGroup >)} />   

                    <Route path="*" exact children={({match, ...rest}) => (
                        <TransitionGroup component={firstChild}> 
                            {match && <NotFound {...rest} />} 
                        </ TransitionGroup >)} />

                    </Switch>
                    </TransitionGroup>

                </div>

            </Router>
        );
    }
}


export default Routes;



// <Router>
// <Switch>
    // <Route path="/" exact render={(props) => <Home {...props} />} />
//     <Route path="/about" exact render={(props) => <About {...props} />} />
//     <Route path="/services" exact render={(props) => <Services {...props} />} />
//     <Route path="/news" exact render={(props) => <News {...props} />} />
//     <Route path="*" exact render={(props) => <NotFound {...props} />} />
// </Switch>
// </Router>