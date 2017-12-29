import React, {Component} from 'react';
import Footer from './Footer';
import '../styles/Main.scss';

import aboutPageImg from '../assets/about.png';
import logo_1 from '../assets/logos_01.gif';

import logo1 from '../assets/logo-BMW.png';
import logo2 from '../assets/logo-HR.png';
import logo3 from '../assets/logo-REL.png';

class Services extends Component {
    state = {expanded: false}

    componentWillMount() {
        this.props.history.push('/services');
    }

    render() {
        return (
            <div className="srv-grid">

                <div className="srv-box1-desk">
                    <h1 className="srv-title">what we do</h1>
                    <h2 className="subtitles">forecasters of the market</h2>
                    <p>Passion is our priority – to make your voice loudly heard 
                        in an overwhelming sea of other voices. 
                        <br/><br/>
                        We aim to unveil hidden 
                        insights within your market and tap you’re your potential 
                        anxiously awaiting to thrive. 
                        <br/><br/>
                        We know people. We know business. We know your potential. 
                        And it is powerful. Let’s tap into it.
                        <br/><br/>
                        Here’s what we do best:<br/><br/>
                        <li>BRANDING — brand messaging and campaign development<br/></li>
                        <li>STRATEGY  — market research and business development<br/></li>
                        <li>CONSUMER  — EXPERIENCE user design and communication<br/></li>
                    </p>
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

                <div className="srv-grid-mid">
                    <div className="srv-box3-desk">
                        <h1 className="srv-title">our approach</h1>
                        <h2 className="subtitles">key between mediocrity and excellence</h2>
                        <p>We approach creativity smarter.<br/>We discover deeply in order 
                            create profound connections and impact.<br/>We believe in constant 
                            movement.<br/>There’s always more to explore. More to reveal. More 
                            to achieve.<br/>We are enthusiasts of cultural influence and 
                            practitioners of business longevity, and we’re here to achieve 
                            something far beyond mediocrity.</p>
                    </div>
                </div>


                <div className="srv-cases">
                    <h1 className="srv-title">experience</h1>
                </div>

                <div className="srv-grid-cases">
                    <div className="brand">
                        <img src={logo_1} alt="logo1"/>
                    </div>
                    <div className="brand">
                        <ul className="srv-list">
                            <li>BMW</li>
                            <li>Cadbury</li>
                            <li>Chibebe</li>
                            <li>Direct Energy</li>
                            <li>Exxon</li>
                            <li>Campbell's</li>
                            <li>Pepperidge Farm</li>
                            <li>General Mills</li>
                            <li>Houston Rising</li>
                            <li>Oppenheimer Funds</li>
                            <li>Fully Raw</li>
                            <li>Green Seed Vegan</li>
                        </ul>
                        </div>
                    <div className="brand">
                        <img src={logo2} alt="logo2" />
                    </div>
                    <div className="brand">
                        <ul className="srv-list">
                            <li>Kraft</li>
                            <li>Maxwell House</li>
                            <li>Blue Cross Blue Shield</li>
                            <li>Gutier</li>
                            <li>Johnsen Law</li>
                            <li>Markowitz Law</li>
                            <li>Louisiana Economic Development</li>
                            <li>Miller Lite</li>
                            <li>Mission</li>
                            <li>NRG</li>
                            <li>Quilted Northern</li>
                            <li>Monster Worldwide, Inc.</li>
                            <li>Southern Coalition of Fashion + Design</li>
                        </ul>
                    </div>
                    <div className="brand">
                        <img src={logo3} alt="logo3"/>
                    </div>
                    <div className="brand">
                        <ul className="srv-list">
                            <li>Hard Rock Casino + Resort</li>
                            <li>Reliant Energy</li>
                            <li>Rich's Foods</li>
                            <li>Sonic</li>
                            <li>Texaco</li>
                            <li>Tyson</li>
                            <li>VW</li>
                            <li>Walmart</li>
                            <li>Saint Theresa Catholic School</li>
                            <li>Webb Gallery</li>
                            <li>Krewe du Optic</li>
                            <li>Old New Orleans Rum</li>
                        </ul>
                    </div>

                </div> {/* end xp */}

                <div className="srv-footer pg-footer">
                    <Footer />
                </div>

            </div>
        )
    }
}


export default Services;