import React, {Component} from 'react';
import GA from 'react-google-analytics-lite';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import '../styles/Main.css';
import homeGif from '../assets/home-desktop.gif';
import homeMobile from '../assets/home-mobile.gif';

class Home extends Component {

      onGALoad() {
        window.ga('create', 'UA-113131904-1', 'auto');//initialize
        window.ga('send', 'pageview', '/');
      }

    render() {
        return (
        <div className="hm-grid">
            <Helmet>
                <meta charSet="utf-8"/>
                <title>amagazi</title>
            </Helmet>
            <GA onload={ this.onGALoad } />
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
