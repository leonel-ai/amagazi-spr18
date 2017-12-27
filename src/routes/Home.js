import React, {Component} from 'react';
import '../styles/Main.css';
import homePageImg from '../assets/lobby.png';


class Home extends Component {
    state = {expanded: false}

    componentWillMount() {
        this.props.history.push('/');
    }

    render() {
        return (
        <div className="hm-grid">
            <div className="hm-box1">
                <h1 className="hm-title">amagazi<br/>reveals<br/>untapped<br/>potential</h1>
            </div>
            <div className="hm-box2">
                <img className="hm-pg-img" src={homePageImg} alt="homepage" />
            </div>
        </div>
        )
    }
}

export default Home;