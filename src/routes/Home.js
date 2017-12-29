import React, {Component} from 'react';
import '../styles/Main.css';
import homePageImg from '../assets/lobby.png';
import homeGif from '../assets/original.gif';


class Home extends Component {
    state = {expanded: false}

    componentWillMount() {
        this.props.history.push('/');
    }

    render() {
        return (
        <div className="hm-grid">
            <div className="hm-box1">
                <h1 className="hm-title">let's<div className="agit">agitate</div>the status quo</h1>
            </div>
            <div className="hm-box2">
                <img className="hm-pg-img" src={homeGif} alt="homepage" />
            </div>
        </div>
        )
    }
}

export default Home;