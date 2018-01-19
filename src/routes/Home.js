import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.css';
import homeGif from '../assets/home-desktop.gif';
import homeMobile from '../assets/home-mobile.gif';

class Home extends Component {
    state = {expanded: false}

    componentWillMount() {
        this.props.history.push('/');
    }

    render() {
        return (
        <div className="hm-grid">
            <div className="hm-box1">
                <img className="hm-pg-img" src={homeGif} alt="homepage" />
            </div>

            <div className="hm-box1-mob">
                <img className="hm-pg-img" src={homeMobile} alt="homepage" />
            </div>

            <div className="hm-ft-privacy">
                <p className="copyright-footer">copyright ©2018 — <Link className="hm-priv" to="/privacy">privacy policy</Link>
            </p>
            </div>
        </div>
        )
    }
}

export default Home;
