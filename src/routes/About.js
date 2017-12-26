import React, {Component} from 'react';
import Footer from './Footer';
import '../styles/Main.scss';
import AnimatedWrapper from "./AnimatedWrapper";
import aboutPageImg from '../assets/about.png';


class AboutComponent extends Component {
    state = {expanded: false}

    componentWillMount() {
        this.props.history.push('/about');
    }

    render() {
        return (
            <div className="ab-grid">

                <div className="ab-box1-desk">
                    <h1 className="ab-title">about us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                        irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur.</p>
                </div>

        
                <div className="ab-box2-desk">
                    <img className="ab-pg-img-desk" src={aboutPageImg} alt="about-desktop" />
                </div>


                <div className="ab-box1-mob">
                    <h1 className="ab-title">about us</h1>
                    <div className="ab-box2-mob">
                        <img className="ab-pg-img-mob" src={aboutPageImg} alt="about-mobile"/>
                        <div className="ab-text-mob">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                            irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>

                <div className="ab-team">
                    <h1 className="ab-title">the team</h1>
                </div>

                <div className="ab-grid-team">
                    <div className="item">ryan petersen</div>
                    <div className="item">chris johnsen</div>
                    <div className="item">miguel nogueras</div>
                    <div className="item">tiffany hobson</div>
                    <div className="item">chris firnkoess</div>
                    <div className="item">shaina huntsberry</div>
                    <div className="item">leonela guzmán</div>
                    <div className="item">forrest mcbride</div>
                    <div className="item">hillary hallinan</div>
                    <div className="item">kristian valentin</div>
                </div>

                <div className="ab-box3-desk">
                    <h1 className="ab-title">careers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam.</p>
                </div>


                <div className="ab-footer pg-footer">
                    <Footer /> 
                </div>
            </div>
        )
    }
}

const About = AnimatedWrapper(AboutComponent);

export default About;