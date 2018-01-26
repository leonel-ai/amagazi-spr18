import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Footer from './Footer';
import '../styles/Main.scss';
import notFoundImg from '../assets/original.gif';


class NotFound extends Component {

    render(){
        return (
            <div className="nf-grid">
            <Helmet>
                <meta charSet="utf-8"/>
                <title>page not found | amagazi</title>
            </Helmet>
                <div className="nf-box1">
                    <h1 className="nf-title">404 | page not found</h1>
                </div>

                <div className="nf-box2-desk">
                    <img src={notFoundImg} alt="notfound"/>
                </div>

                <div className="nf-box2-mob">
                    <img className="nf-404-mob" src={notFoundImg} alt="notfound" />
                </div>

                <div className="nf-footer pg-footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default NotFound;
