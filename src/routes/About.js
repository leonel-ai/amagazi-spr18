import React, {Component} from 'react';
import Footer from './Footer';
import '../styles/Main.scss';
import aboutPageImg from '../assets/about.png';
import teamBioImg from '../assets/teamEx.png';


class About extends Component {
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

                    <div className="item">
                        <div className="item-media">
                            <img src={teamBioImg} alt="ryan" className="teamBioImg" />
                            <h2>ryan petersen</h2><h4>founder/ceo</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-media">
                            <img src={teamBioImg} alt="chrisj" className="teamBioImg" />
                            <h2>chris johnsen</h2><h4>chief operating officer/counsel</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-media">
                            <img src={teamBioImg} alt="miguel" className="teamBioImg" />
                            <h2>miguel nogueras</h2><h4>creative director</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-media">
                            <img src={teamBioImg} alt="tiffany" className="teamBioImg" />
                            <h2>tiffany hobson</h2><h4>executive vice president</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-media">
                            <img src={teamBioImg} alt="chrisf" className="teamBioImg" />
                            <h2>chris firnkoess</h2><h4>art director</h4>
                        </div>
                    </div>


                    <div className="item">
                        <div className="item-media">
                            <img src={teamBioImg} alt="leonela" className="teamBioImg" />
                            <h2>leonela guzmán</h2><h4>digital developer</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-media">
                            <img src={teamBioImg} alt="shaina" className="teamBioImg" />
                            <h2>shaina huntsberry</h2><h4>copywriter</h4>
                        </div>
                    </div>


                    <div className="item">
                        <div className="item-media">
                            <img src={teamBioImg} alt="forrest" className="teamBioImg" />
                            <h2>forrest mcbride</h2><h4>videographer/photographer</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-media">
                            <img src={teamBioImg} alt="hillary" className="teamBioImg" />
                            <h2>hillary hallinan</h2><h4>traffic coordinator</h4>
                        </div>
                    </div>

                    {/* <div className="item">
                            <div className="item-media">
                                <img src={teamBioImg} alt="kristian" className="teamBioImg" />
                                <h2>kristian valentin<br/>sales</div>
                            </div>
                    </div> */}
                        
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

export default About;