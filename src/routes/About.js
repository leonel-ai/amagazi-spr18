import React, {Component} from 'react';
import Footer from './Footer';
import '../styles/Main.scss';

import aboutPageImg from '../assets/about.png';
import aboutMobile from '../assets/about_m.png';
import ryan from '../assets/team/ryan.png';
import chrisj from '../assets/team/chrisJ.png';
import miguel from '../assets/team/miguel.png';
import tiffany from '../assets/team/tiffany.png';
import shaina from '../assets/team/shaina.png';
import hillary from '../assets/team/hillary.png';
import chrisf from '../assets/team/chrisf.png';
import leonela from '../assets/team/leonela.png';
import forrest from '../assets/team/forrest.png';

class About extends Component {
    state = {expanded: false}

    componentWillMount() {
        this.props.history.push('/about');
    }

    render() {
        return (
            <div className="ab-grid">

                <div className="ab-box1-desk">
                    <h1 className="ab-title">who we are</h1>
                    <h2 className="subtitles">forecasters of the future<br/>provocateurs with a purpose</h2>
                    <p>amagazi is a creative solutions company, and we exist to spark 
                        exponential growth for your business. We’re a team of brainy 
                        business people, creative strategy experts, culture connoisseurs, 
                        and catalysts for getting what you want. We predict trends in the 
                        business market so you can stay ahead and stay relevant. We solve 
                        business obstacles with strategies, words, and creativity across 
                        any platform that makes sense. Our expertise includes branding, 
                        business development, and crafting the perfect consumer experience.
                        <br/><br/>
                        Let’s start a conversation.</p>
                </div>

        
                <div className="ab-box2-desk">
                    <img className="ab-pg-img-desk" src={aboutPageImg} alt="about-desktop" />
                </div>


                <div className="ab-box1-mob">
                    <h1 className="ab-title">who we are</h1>
                    <div className="ab-box2-mob">
                        <img className="ab-pg-img-mob" src={aboutMobile} alt="about-mobile"/>
                        <div className="ab-text-mob">
                            <h2 className="subtitles-mob">forecasters of the future<br/>provocateurs with a purpose</h2>
                            <p>amagazi is a creative solutions company, and we exist to spark 
                            exponential growth for your business. We’re a team of brainy 
                            business people, creative strategy experts, culture connoisseurs, 
                            and catalysts for getting what you want. We predict trends in the 
                            business market so you can stay ahead and stay relevant. We solve 
                            business obstacles with strategies, words, and creativity across 
                            any platform that makes sense. Our expertise includes branding, 
                            business development, and crafting the perfect consumer experience.
                            <br/><br/>
                            Let’s start a conversation.</p>
                        </div>
                    </div>
                </div>

                <div className="ab-team">
                    <h1 className="ab-title">the team</h1>
                </div>

                <div className="ab-grid-team">

                    <div className="item">
                        <div className="item-media">
                            <img src={ryan} alt="ryan" className="teamBioImg" />
                            <h2 className="subtitles">ryan petersen</h2><h4>ceo/founder</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-media">
                            <img src={chrisj} alt="chrisj" className="teamBioImg" />
                            <h2 className="subtitles">chris johnsen</h2><h4>coo/gc</h4>
                        </div>
                    </div> 

                    <div className="item">
                        <div className="item-media">
                            <img src={miguel} alt="miguel" className="teamBioImg" />
                            <h2 className="subtitles">miguel nogueras</h2><h4>executive creative director</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-media">
                            <img src={tiffany} alt="tiffany" className="teamBioImg" />
                            <h2 className="subtitles">tiffany hobson</h2><h4>executive vice president</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-media">
                            <img src={shaina} alt="shaina" className="teamBioImg" />
                            <h2 className="subtitles">shaina huntsberry</h2><h4>senior copywriter</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-media">
                            <img src={hillary} alt="hillary" className="teamBioImg" />
                            <h2 className="subtitles">hillary hallinan</h2><h4>project manager</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-media">
                            <img src={chrisf} alt="chrisf" className="teamBioImg" />
                            <h2 className="subtitles">chris firnkoess</h2><h4>art director</h4>
                        </div>
                    </div>


                    <div className="item">
                        <div className="item-media">
                            <img src={leonela} alt="leonela" className="teamBioImg" />
                            <h2 className="subtitles">leonela guzmán</h2><h4>full stack developer</h4>
                        </div>
                    </div>


                    <div className="item">
                        <div className="item-media">
                            <img src={forrest} alt="forrest" className="teamBioImg" />
                            <h2 className="subtitles">forrest mcbride</h2><h4>producer</h4>
                        </div>
                    </div>
                        
                </div>

                <div className="ab-grid-bottom">
                    <div className="ab-box3-desk">
                        <h1 className="ab-title">culture</h1>
                        <h2 className="subtitles">unicorns of the industry</h2>
                        <p>Each member of the amagazi team brings his and her own unique 
                            cultural, professional, and intellectual insight. Not because 
                            we’ve read about it on blogs or instructional handbooks– it 
                            just stems from good ‘ol life experience and consciously-crafted 
                            skill. To work with us is to work with best, brightest, most 
                            colorfully complicated minds alike.</p>
                    </div>

                    <div className="ab-box3-mob">
                        <h1 className="ab-title">culture</h1>
                        <h2 className="subtitles-mob">unicorns of the industry</h2>
                        <p>Each member of the amagazi team brings his and her own unique 
                            cultural, professional, and intellectual insight. Not because 
                            we’ve read about it on blogs or instructional handbooks– it 
                            just stems from good ‘ol life experience and consciously-crafted 
                            skill. To work with us is to work with best, brightest, most 
                            colorfully complicated minds alike.</p>
                    </div>
                

                    <div className="ab-box4-desk">
                        <h1 className="ab-title">careers</h1>
                        <p>We're always looking for more talented influencers.<br/><br/>Connect with us at <a className="joblink" href="mailto:hello@amagazi.com?subject=Hello, amagazi careers!">hello@amagazi.com</a></p>
                    </div>


                    <div className="ab-box4-mob">
                        <h1 className="ab-title">careers</h1>
                        <p>We're always looking for more talented influencers.<br/><br/>Connect with us at <a className="joblink" href="mailto:hello@amagazi.com?subject=Hello, amagazi careers!">hello@amagazi.com</a></p>
                    </div>
                </div>


                <div className="ab-footer pg-footer">
                    <Footer /> 
                </div>
            </div>
        )
    }
}

export default About;