import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Footer from './Footer';
import '../styles/Main.scss';


class NotFound extends Component {

    render(){
        return (
            <div className="nf-grid">
            <Helmet>
                <meta charSet="utf-8"/>
                <title>page not found | amagazi</title>
            </Helmet>
                <div className="nf-box1">
                    <p>404 | page not found</p>
                </div>

                <div className="nf-footer pg-footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default NotFound;
