import React, {Component} from 'react';
import Footer from './Footer';
import '../styles/Main.scss';
import aboutPageImg from '../assets/about.png';


class Services extends Component {
    state = {expanded: false}

    componentWillMount() {
        this.props.history.push('/services');
    }

    render() {
        return (
            <div className="srv-grid">

                <div className="srv-box1-desk">
                    <h1 className="srv-title">services</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut lsrvore et dolore magna aliqua.<br/>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        lsrvoris nisi ut aliquip ex ea commodo consequat. Duis aute 
                        irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="srv-box2-desk">
                    <img className="srv-pg-img-desk" src={aboutPageImg} alt="services-desktop" />
                </div>

                <div className="srv-box1-mob">
                    <h1 className="srv-title">services</h1>
                    <div className="srv-box2-mob">
                        <img className="srv-pg-img-mob" src={aboutPageImg} alt="services-mobile" />
                        <div className="srv-text-mob">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                            do eiusmod tempor incididunt ut lsrvore et dolore magna aliqua.<br/>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            lsrvoris nisi ut aliquip ex ea commodo consequat. Duis aute 
                            irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>


                <div className="srv-cases">
                    <h1 className="srv-title">experience</h1>
                </div>

                <div className="srv-grid-cases">
                    <div className="brand"></div>
                    <div className="brand">
                        <ul className="srv-list">
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                        </ul>
                        </div>
                    <div className="brand"></div>
                    <div className="brand">
                        <ul className="srv-list">
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                        </ul>
                    </div>
                    <div className="brand"></div>
                    <div className="brand">
                        <ul className="srv-list">
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                        </ul>
                    </div>
                    <div className="brand"></div>
                    <div className="brand">
                        <ul className="srv-list">
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                        </ul>
                    </div>
                    <div className="brand"></div>
                    <div className="brand">
                        <ul className="srv-list">
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                            <li>brand</li>
                        </ul>
                    </div>
                </div>

                <div className="srv-footer pg-footer">
                    <Footer />
                </div>

            </div>
        )
    }
}


export default Services;